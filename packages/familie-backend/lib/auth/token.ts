import moment from 'moment-timezone';
import request from 'request-promise';
import { logError, logInfo } from '../customLoglevel';
import { SessionRequest, ITokenRequest } from '../typer';

// Hent eller oppdater OBO token
export const validerEllerOppdaterOnBehalfOfToken = async (
    req: SessionRequest,
    tokenRequest: ITokenRequest,
) => {
    if (!req.session) {
        logError(
            req,
            'Mangler session i validateRefreshAndGetOboToken. Returning invalid OBO accessToken.',
        );
        return '';
    }

    if (!req.session.oboAccessToken) {
        logInfo(req, 'No OBO accessToken, fetching new OBO accessToken.');

        const newOboAccessToken = await hentOnBehalfOfToken(req, tokenRequest);

        req.session.oboAccessToken = newOboAccessToken;
    } else if (moment().isAfter(moment(req.session.oboExpiryDate))) {
        logInfo(req, 'Expired token, fetching new OBO accessToken.');

        const newOboAccessToken = await hentOnBehalfOfToken(req, tokenRequest);

        if (req.session) {
            req.session.oboAccessToken = newOboAccessToken;
        }
    } else {
        logInfo(req, 'Valid OBO accessToken in cache.');
        return req.session.oboAccessToken;
    }
    req.session.oboExpiryDate = JSON.parse(decodeToken(req.session.oboAccessToken)).exp * 1000;

    req.session.save((error: Error) => {
        if (error) {
            logError(req, `Failed to save OBO access token to session: ${error}`);
        }
    });

    return req.session.oboAccessToken;
};

// Hent eller oppdater access token
export const validerEllerOppdaterAccessToken = async (
    req: SessionRequest,
    tokenRequest: ITokenRequest,
) => {
    if (!req.session) {
        logError(
            req,
            'No session found in validateRefreshAndGetToken. Returning invalid accessToken.',
        );
        return '';
    }

    if (!req.session.accessToken) {
        logInfo(req, 'No accessToken, fetching new accessToken.');

        const newAccessToken = await hentAccessTokenForSaksbehandler(req, tokenRequest);

        req.session.accessToken = newAccessToken;
    } else if (moment().isAfter(moment(req.session.expiryDate))) {
        logInfo(req, 'Expired token, fetching new accessToken.');

        const newAccessToken = await hentAccessTokenForSaksbehandler(req, tokenRequest);

        if (req.session) {
            req.session.accessToken = newAccessToken;
        }
    } else {
        logInfo(req, 'Valid accessToken in cache.');
        return req.session.accessToken;
    }
    req.session.expiryDate = JSON.parse(decodeToken(req.session.accessToken)).exp * 1000;

    req.session.save((error: Error) => {
        if (error) {
            logError(req, `Failed to save access token to session: ${error}`);
        }
    });

    return req.session.accessToken;
};

// Hent access token for saksbehandler
const hentAccessTokenForSaksbehandler = async (
    req: SessionRequest,
    tokenRequest: ITokenRequest,
) => {
    const data = {
        client_id: tokenRequest.clientId,
        client_secret: tokenRequest.clientSecret,
        grant_type: 'refresh_token',
        redirect_uri: tokenRequest.redirectUrl,
        refresh_token: req.session.refreshToken,
        scope: tokenRequest.scope,
    };

    return request
        .post({ url: tokenRequest.tokenUri, formData: data }, (err, httpResponse, body) => {
            return body;
        })
        .then(result => {
            return JSON.parse(result).access_token;
        })
        .catch(err => {
            logError(req, `Error during getAccessTokenUser: ${err}`);
            req.session.destroy((error: Error) => {
                if (error) {
                    logError(req, `Failed to destroy session: ${error}`);
                }
            });
            return '';
        });
};

// Hent OBO token for saksbehandler
const hentOnBehalfOfToken = async (req: SessionRequest, tokenRequest: ITokenRequest) => {
    const data = {
        assertion: req.session.accessToken,
        client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
        client_id: tokenRequest.clientId,
        client_secret: tokenRequest.clientSecret,
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        redirect_uri: tokenRequest.redirectUrl,
        requested_token_use: 'on_behalf_of',
        scope: tokenRequest.scope,
    };

    return request
        .post({ url: tokenRequest.tokenUri, formData: data }, (err, httpResponse, body) => {
            return body;
        })
        .then(result => {
            return JSON.parse(result).access_token;
        })
        .catch(err => {
            logError(req, `Error during getAccessTokenUser: ${err}`);
            req.session.destroy((error: Error) => {
                if (error) {
                    logError(req, `Failed to destroy session: ${error}`);
                }
            });
            return '';
        });
};

// Dekod token
const decodeToken = (encodedToken: string): string => {
    if (encodedToken) {
        if (encodedToken.startsWith('eyJ0') || process.env.NODE_ENV === 'development') {
            const tokenSplit = encodedToken.split('.');
            const tokenDecoded = Buffer.from(tokenSplit[1], 'base64').toString();
            return tokenDecoded;
        } else {
            throw new Error('not a valid accessToken or id_token');
        }
    } else {
        throw new Error('no token in input');
    }
};
