import { Request } from 'express';
import { logError, logDebug, logInfo, LOG_LEVEL, logWarn } from '@navikt/familie-logging';

export const envVar = (navn: string, påkrevd = true, defaultValue?: string): string => {
    const envVariable = process.env[navn];
    if (!envVariable && påkrevd && !defaultValue) {
        logError(`Mangler påkrevd miljøvariabel '${navn}'`);
        process.exit(1);
    }
    if (!envVariable && defaultValue) {
        return defaultValue;
    } else {
        return envVariable as string;
    }
};

const prefix = (req: Request) => {
    return `${
        req.session && req.session.user ? `${req.session.user.displayName} -` : 'ugyldig sesjon -'
    } ${req.method} - ${req.originalUrl}`;
};

export const logRequest = (req: Request, message: string, level: LOG_LEVEL) => {
    const melding = `${prefix(req)}: ${message}`;
    switch (level) {
        case LOG_LEVEL.DEBUG:
            logDebug(melding);
            break;
        case LOG_LEVEL.INFO:
            logInfo(melding);
            break;
        case LOG_LEVEL.WARNING:
            logWarn(melding);
            break;
        case LOG_LEVEL.ERROR:
            logError(melding);
            break;
        default:
            logInfo(melding);
    }
};
