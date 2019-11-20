import moment from 'moment-timezone';
import request from 'request-promise';
import { logError, logInfo } from '../customLoglevel';
import { ITokenRequest, SessionRequest } from '../typer';

// Hent eller oppdater OBO token
export const validerEllerOppdaterOnBehalfOfToken = async (
    req: SessionRequest,
    saksbehandlerTokenConfig: ITokenRequest,
    oboTokenConfig: ITokenRequest,
) => {
    if (!req.session) {
        logError(
            req,
            'Mangler session i validateRefreshAndGetOboToken. Returnerer ugyldig access token.',
        );
        return '';
    }

    if (!req.session.oboAccessToken) {
        logInfo(req, 'Mangler OBO access token i session, henter nytt.');

        const newOboAccessToken = await hentOnBehalfOfToken(
            req,
            saksbehandlerTokenConfig,
            oboTokenConfig,
        );

        req.session.oboAccessToken = newOboAccessToken;
    } else if (moment().isAfter(moment(req.session.oboExpiryDate))) {
        logInfo(req, 'OBO token har utgått, henter nytt.');

        const newOboAccessToken = await hentOnBehalfOfToken(
            req,
            saksbehandlerTokenConfig,
            oboTokenConfig,
        );

        if (req.session) {
            req.session.oboAccessToken = newOboAccessToken;
        }
    } else {
        logInfo(req, 'Gyldig OBO access token i cache.');
        return req.session.oboAccessToken;
    }
    req.session.oboExpiryDate = JSON.parse(decodeToken(req.session.oboAccessToken)).exp * 1000;

    req.session.save((error: Error) => {
        if (error) {
            logError(req, `Feilet ved lagring av OBO access token til session: ${error}`);
        }
    });

    return req.session.oboAccessToken;
};

// Hent eller oppdater access token
export const validerEllerOppdaterAccessToken = async (
    req: SessionRequest,
    saksbehandlerTokenConfig: ITokenRequest,
) => {
    if (!req.session) {
        logError(
            req,
            'Mangler session i validerEllerOppdaterAccessToken. Returnerer ugyldig access token.',
        );
        return '';
    }

    if (!req.session.accessToken) {
        logInfo(req, 'Mangler access token i session, henter nytt.');

        const newAccessToken = await hentAccessTokenForSaksbehandler(req, saksbehandlerTokenConfig);

        req.session.accessToken = newAccessToken;
    } else if (moment().isAfter(moment(req.session.expiryDate))) {
        logInfo(req, 'Access token har utgått, henter nytt.');

        const newAccessToken = await hentAccessTokenForSaksbehandler(req, saksbehandlerTokenConfig);

        if (req.session) {
            req.session.accessToken = newAccessToken;
        }
    } else {
        logInfo(req, 'Gyldig access token i cache.');
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
    saksbehandlerTokenConfig: ITokenRequest,
) => {
    const data = {
        client_id: saksbehandlerTokenConfig.clientId,
        client_secret: saksbehandlerTokenConfig.clientSecret,
        grant_type: 'refresh_token',
        redirect_uri: saksbehandlerTokenConfig.redirectUrl,
        refresh_token: req.session.refreshToken,
        scope: saksbehandlerTokenConfig.scope,
    };

    return request
        .post(
            { url: saksbehandlerTokenConfig.tokenUri, formData: data },
            (err, httpResponse, body) => {
                return body;
            },
        )
        .then(result => {
            return JSON.parse(result).access_token;
        })
        .catch(err => {
            logError(req, `Feilet ved hentAccessTokenForSaksbehandler: ${err}`);
            req.session.destroy((error: Error) => {
                if (error) {
                    logError(req, `Feilet ved nedbrytning av session: ${error}`);
                }
            });
            return '';
        });
};

// Hent OBO token for saksbehandler
const hentOnBehalfOfToken = async (
    req: SessionRequest,
    saksbehandlerTokenConfig: ITokenRequest,
    oboTokenConfig: ITokenRequest,
) => {
    const accessToken = await validerEllerOppdaterAccessToken(req, saksbehandlerTokenConfig);
    const data = {
        assertion: accessToken,
        client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
        client_id: oboTokenConfig.clientId,
        client_secret: oboTokenConfig.clientSecret,
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        redirect_uri: oboTokenConfig.redirectUrl,
        requested_token_use: 'on_behalf_of',
        scope: oboTokenConfig.scope,
    };

    return request
        .post({ url: oboTokenConfig.tokenUri, formData: data }, (err, httpResponse, body) => {
            return body;
        })
        .then(result => {
            return JSON.parse(result).access_token;
        })
        .catch(err => {
            logError(req, `Feilet ved hentOnBehalfOfToken: ${err}`);
            req.session.destroy((error: Error) => {
                if (error) {
                    logError(req, `Feilet ved nedbrytning av session: ${error}`);
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
            throw new Error('ikke et gyldig access token eller id_token');
        }
    } else {
        throw new Error('mangler token til funksjon');
    }
};
