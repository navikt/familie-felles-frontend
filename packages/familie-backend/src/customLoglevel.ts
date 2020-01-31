import { Request } from 'express';
import loglevel from 'loglevel';
import momenttz from 'moment-timezone';

loglevel.setDefaultLevel(loglevel.levels.INFO);
export const getLogTimestamp = () => {
    return `${momenttz()
        .tz('Europe/Oslo')
        .format('YYYY-MM-DD HH:mm:ss')}`;
};

const prefix = (req: Request, level: string) => {
    return `[${getLogTimestamp()}, ${level} - ${
        req.session ? `${req.session.displayName} -` : 'ugyldig sesjon -'
    } ${req.method}: ${req.originalUrl}]`;
};

export const logInfo = (req: Request, message: string) => {
    loglevel.info(`${prefix(req, 'INFO')}: ${message}`);
};

export const logError = (req: Request, message: string) => {
    loglevel.error(`${prefix(req, 'ERROR')}: ${message}`);
};
