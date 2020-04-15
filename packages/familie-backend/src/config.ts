import { error } from './logging';
import { IAppConfig } from './typer';

export const envVar = (navn: string, påkrevd = true, defaultValue?: string): string => {
    const envVariable = process.env[navn];
    if (!envVariable && påkrevd && !defaultValue) {
        error(`Mangler påkrevd miljøvariabel '${navn}'`);
        process.exit(1);
    }
    if (!envVariable && defaultValue) {
        return defaultValue;
    } else {
        return envVariable as string;
    }
};

export const appConfig: IAppConfig = {
    clientId: envVar('CLIENT_ID'),
    clientSecret: envVar('CLIENT_SECRET'),
    discoveryUrl: envVar('AAD_DISCOVERY_URL'),
    logoutRedirectUri: envVar('AAD_LOGOUT_REDIRECT_URL'),
    redirectUri: envVar('AAD_REDIRECT_URL'),
    sessionSecret: envVar('SESSION_SECRET'),
};
