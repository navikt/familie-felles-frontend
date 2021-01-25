import fs from 'fs';
import winston from 'winston';
import { envVar } from './utils';

export enum LOG_LEVEL {
    ERROR = 3,
    WARNING = 2,
    INFO = 1,
    DEBUG = 0,
}

const secureLogPath = () =>
    fs.existsSync('/secure-logs/') ? '/secure-logs/secure.log' : './secure.log';

export const stdoutLogger = winston.createLogger({
    format: winston.format.json(),
    level: envVar('LOG_LEVEL', false, 'info'),
    transports: [new winston.transports.Console()],
});

export const secureLogger = winston.createLogger({
    format: winston.format.json(),
    level: 'info',
    transports: [new winston.transports.File({ filename: secureLogPath(), maxsize: 5242880 })],
});

export const debug = (message: string) => {
    stdoutLogger.debug(`[${new Date().toISOString()}] ${message}`);
};

export const info = (message: string) => {
    stdoutLogger.info(`[${new Date().toISOString()}] ${message}`);
};

export const warning = (message: string) => {
    stdoutLogger.warn(`[${new Date().toISOString()}] ${message}`);
};

export const error = (message: string, err?: Error) => {
    stdoutLogger.error(
        `[${new Date().toISOString()}] ${message}`,
        err && { message: `: ${err?.message || err}` },
    );
};

export const secure = (message: string) => {
    secureLogger.info(`[${new Date().toISOString()}] ${message}`);
};
