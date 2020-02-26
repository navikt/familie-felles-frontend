import { Request } from 'express';
import moment from 'moment-timezone';
import request from 'request-promise';
import { LOG_LEVEL, logRequest } from '../logging';
import { ITokenRequest } from '../typer';

// Hent eller oppdater OBO token
export const validerEllerOppdaterOnBehalfOfToken = async (
    req: Request,
    saksbehandlerTokenConfig: ITokenRequest,
    oboTokenConfig: ITokenRequest,
) => {
    if (!req.session) {
        throw Error(
            'Mangler session i validateRefreshAndGetOboToken. Returnerer ugyldig access token.',
        );
    }

    if (req.session.oboAccessTokens === undefined) {
        req.session.oboAccessTokens = {};
    }

    if (req.session.oboExpiryDates === undefined) {
        req.session.oboExpiryDates = {};
    }

    if (req.session.oboAccessTokens[oboTokenConfig.scope] === undefined) {
        logRequest(req, 'Mangler OBO access token i session, henter nytt.', LOG_LEVEL.INFO);

        const newOboAccessToken = await hentOnBehalfOfToken(
            req,
            saksbehandlerTokenConfig,
            oboTokenConfig,
        );

        req.session.oboAccessTokens[oboTokenConfig.scope] = newOboAccessToken;
    } else if (moment().isAfter(moment(req.session.oboExpiryDates[oboTokenConfig.scope]))) {
        logRequest(req, 'OBO token har utgått, henter nytt.', LOG_LEVEL.INFO);

        const newOboAccessToken = await hentOnBehalfOfToken(
            req,
            saksbehandlerTokenConfig,
            oboTokenConfig,
        );

        if (req.session) {
            req.session.oboAccessTokens[oboTokenConfig.scope] = newOboAccessToken;
        }
    } else {
        logRequest(req, 'Gyldig OBO access token i cache.', LOG_LEVEL.INFO);
        return req.session.oboAccessTokens[oboTokenConfig.scope];
    }
    req.session.oboExpiryDates[oboTokenConfig.scope] =
        JSON.parse(decodeToken(req.session.oboAccessTokens[oboTokenConfig.scope])).exp * 1000;

    req.session.save((error: Error) => {
        if (error) {
            logRequest(
                req,
                `Feilet ved lagring av OBO access token til session: ${error}`,
                LOG_LEVEL.ERROR,
            );
        }
    });

    return req.session.oboAccessTokens[oboTokenConfig.scope];
};

// Hent eller oppdater access token
export const validerEllerOppdaterAccessToken = async (
    req: Request,
    saksbehandlerTokenConfig: ITokenRequest,
) => {
    if (!req.session) {
        throw Error(
            'Mangler session i validerEllerOppdaterAccessToken. Returnerer ugyldig access token.',
        );
    }

    if (!req.session.accessToken) {
        logRequest(req, 'Mangler access token i session, henter nytt.', LOG_LEVEL.INFO);

        const newAccessToken = await hentAccessTokenForSaksbehandler(req, saksbehandlerTokenConfig);

        req.session.accessToken = newAccessToken;
    } else if (moment().isAfter(moment(req.session.expiryDate))) {
        logRequest(req, 'Access token har utgått, henter nytt.', LOG_LEVEL.INFO);

        const newAccessToken = await hentAccessTokenForSaksbehandler(req, saksbehandlerTokenConfig);

        if (req.session) {
            req.session.accessToken = newAccessToken;
        }
    } else {
        logRequest(req, 'Gyldig access token i cache.', LOG_LEVEL.INFO);
        return req.session.accessToken;
    }
    req.session.expiryDate = JSON.parse(decodeToken(req.session.accessToken)).exp * 1000;

    req.session.save((error: Error) => {
        if (error) {
            logRequest(req, `Failed to save access token to session: ${error}`, LOG_LEVEL.ERROR);
        }
    });

    return req.session.accessToken;
};

// Hent access token for saksbehandler
const hentAccessTokenForSaksbehandler = async (
    req: Request,
    saksbehandlerTokenConfig: ITokenRequest,
) => {
    if (!req.session) {
        throw new Error('Mangler sesjon på kall');
    }

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
            (_err, _httpResponse, body) => {
                return body;
            },
        )
        .then(result => {
            return JSON.parse(result).access_token;
        })
        .catch(err => {
            logRequest(req, `Feilet ved hentAccessTokenForSaksbehandler: ${err}`, LOG_LEVEL.ERROR);

            if (!req.session) {
                throw new Error('Mangler sesjon på kall');
            }
            req.session.destroy((error: Error) => {
                if (error) {
                    logRequest(req, `Feilet ved nedbrytning av session: ${error}`, LOG_LEVEL.ERROR);
                }
            });
            throw new Error(`Feilet ved hentAccessTokenForSaksbehandler: ${err}`);
        });
};

// Hent OBO token for saksbehandler
const hentOnBehalfOfToken = async (
    req: Request,
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
        .post({ url: oboTokenConfig.tokenUri, formData: data }, (_err, _httpResponse, body) => {
            return body;
        })
        .then(result => {
            return JSON.parse(result).access_token;
        })
        .catch(err => {
            logRequest(req, `Feilet ved hentOnBehalfOfToken: ${err}`, LOG_LEVEL.ERROR);

            if (!req.session) {
                throw new Error('Mangler sesjon på kall');
            }
            req.session.destroy((error: Error) => {
                if (error) {
                    logRequest(req, `Feilet ved nedbrytning av session: ${error}`, LOG_LEVEL.ERROR);
                }
            });
            throw new Error(`Feilet ved hentOnBehalfOfToken: ${err}`);
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
