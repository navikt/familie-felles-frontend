import { Request, Response } from 'express';
import request from 'request-promise';
import { ITokenRequest } from '../typer';
import { hentOnBehalfOfToken } from './token';
import { logInfo } from '../customLoglevel';

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
export const hentBrukerenhet = (saksbehandlerTokenConfig: ITokenRequest) => {
    
    const msGraphOBOTokenConfig: ITokenRequest = {
        clientId: saksbehandlerTokenConfig.clientId,
        clientSecret: saksbehandlerTokenConfig.clientSecret,
        redirectUrl: saksbehandlerTokenConfig.redirectUrl,
        scope: `https://graph.microsoft.com/.default`,
        tokenUri: saksbehandlerTokenConfig.tokenUri,
    };
    
    return async (req:Request, res: Response) => {

        const msGraphMeUrl= `https://graph.microsoft.com/v1.0/me`
        if(!req.session){
            throw new Error('Mangler sesjon på kall');
        }

        if(req.session.enhet){
            logInfo(req, "Gyldig enhet i session");
            res.status(200).send(req.session.enhet);
            return;
        }

        logInfo(req, "Enhet ikke i session, henter fra "+ msGraphMeUrl);
        
        const obotoken= await hentOnBehalfOfToken(req, saksbehandlerTokenConfig, msGraphOBOTokenConfig);

        request
        .get(
            { url: msGraphMeUrl, headers:{
                Authorization: 'Bearer '+ obotoken,
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
            
            if(!req.session){
                throw new Error('Mangler sesjon på kall');
            }

            req.session.enhet= enhet;

            res.status(200).send(enhet);
        })
        .catch(err => {
            throw new Error(`Feilet ved hent enhet: ${err}`);
        });
    };
};