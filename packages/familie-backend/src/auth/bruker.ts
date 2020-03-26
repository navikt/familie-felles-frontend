import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { Client } from 'openid-client';
import { getOnBehalfOfAccessToken } from './utils';

// Hent brukerprofil fra sesjon
export const hentBrukerprofil = () => {
    return async (req: Request, res: Response) => {
        if (!req.session) {
            throw new Error('Mangler sesjon på kall');
        }

        res.status(200).send(req.session.user);
    };
};

export const getUserInfoFromGraphApi = (authClient: Client, req: Request, next: NextFunction) => {
    return new Promise((_, reject) => {
        const api = {
            scopes: ['https://graph.microsoft.com/.default'],
            clientId: 'https://graph.microsoft.com',
        };

        const query =
            'onPremisesSamAccountName,displayName,mail,officeLocation,userPrincipalName,id';
        const graphUrl = `https://graph.microsoft.com/v1.0/me?$select=${query}`;
        getOnBehalfOfAccessToken(authClient, req, api)
            .then(accessToken =>
                axios.get(graphUrl, { headers: { Authorization: `Bearer ${accessToken}` } }),
            )
            .then((response: any) => {
                if (!req.session) {
                    throw new Error('Mangler sesjon på kall');
                }

                req.session.user = {
                    displayName: response.data.displayName,
                    email: response.data.userPrincipalName,
                    enhet: response.data.officeLocation.slice(0, 4),
                    identifier: response.data.userPrincipalName,
                    navIdent: response.data.onPremisesSamAccountName,
                };
                return next();
            })
            .catch((err: Error) => {
                if (!req.session) {
                    throw new Error('Mangler sesjon på kall');
                }

                req.session.user = {
                    enhet: '9999',
                };
                reject(err);
            });
    });
};
