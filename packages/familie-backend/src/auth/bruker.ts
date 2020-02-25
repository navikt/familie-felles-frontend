import { Request, Response } from 'express';
import request from 'request-promise';

// Hent brukerprofil
export const hentBrukerprofil = () => {
    return async (req: Request, res: Response) => {
        if (!req.session) {
            throw new Error('Mangler sesjon på kall');
        }

        const user = {
            displayName: req.session.displayName,
            email: req.session.upn,
            groups: req.session.groups,
            identifier: req.session.upn,
        };
        res.status(200).send(user);
    };
};

// Hent brukerenhet
export const hentBrukerenhet = (scope?: string) => {
    return async (req:Request, res: Response) => {
        if(!scope){
            throw new Error('scope undefined');
        }

        const msGraphMeUrl= `https://graph.microsoft.com/v1.0/me`
        if(!req.session){
            throw new Error('Mangler sesjon på kall');
        }

        request
        .get(
            { url: msGraphMeUrl, headers:{
                Authorization: 'Bearer '+ req.session.oboAccessTokens[scope],
            } },
            (_err, _httpResponse, body) => {
                return body;
            },
        )
        .then(result => {
            const enhet= JSON.parse(result)?.officeLocation?.slice(0, 4);
            if(!enhet){
                throw new Error('officeLocation ikke funnet fra Microsoft Graph, eller formatet er uventet');
            }

            res.status(200).send(enhet);
        })
        .catch(err => {
            throw new Error(`Feilet ved hent enhet: ${err}`);
        });
    };
};