import path from 'path';
import winston from 'winston';

const logLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        verbose: 'cyan',
        debug: 'blue',
        silly: 'grey'
    }
};


const logFormat = winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level}]: ${message}`;
});

// const logDir = `logs/${process.env.NODE_ENV || 'development'}`;
const logDir = `logs/`;

const logger = winston.createLogger({
    levels: logLevels.levels,
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
            winston.format.colorize(),
            winston.format.timestamp(),
            logFormat
            )
        }),

        new winston.transports.File({
            filename: `${logDir}/app.log`,
            level: 'info',
            format: winston.format.combine(
            winston.format.timestamp(),
            logFormat
            )
        })
    ]
});

winston.addColors(logLevels.colors);

export default logger;
