import loglevel from 'loglevel';
import momenttz from 'moment-timezone';
import { SessionRequest } from './typer';

export const getLogTimestamp = () => {
    return `${momenttz()
        .tz('Europe/Oslo')
        .format('YYYY-MM-DD HH:mm:ss')}`;
};

const prefix = (req: SessionRequest, level: string) => {
    return `[${getLogTimestamp()}, ${level} - ${
        req.session ? `${req.session.displayName} -` : 'ugyldig sesjon -'
    } ${req.method}: ${req.originalUrl}]`;
};

export const logInfo = (req: SessionRequest, message: string) => {
    loglevel.info(`${prefix(req, 'INFO')}: ${message}`);
};

export const logError = (req: SessionRequest, message: string) => {
    loglevel.error(`${prefix(req, 'ERROR')}: ${message}`);
};
