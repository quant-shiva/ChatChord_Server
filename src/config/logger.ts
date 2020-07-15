import winston, { Logger, format } from 'winston';

const loggerFormat = format.printf(({ level, message, timestamp, ...metadata }) => {
    let msg = `\n${timestamp} [${level}] : ${message} `
    if (metadata && metadata !== {}) {
        msg += JSON.stringify(metadata)
    }
    return msg
});


const logger: Logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: format.combine(
                format.timestamp(),
                format.colorize(),
                format.splat(),
                loggerFormat
            )
        }),
        new winston.transports.File({
            filename: "src/logs/all.log",
            level: "info",
            format: winston.format.combine(
                winston.format.timestamp(),
                format.json()
                )
        }),
        new winston.transports.File({
            filename: "src/logs/error.log",
            level: "error",
            format: winston.format.combine(
                winston.format.timestamp(),
                format.json()
                )
        })
    ]
});

export default logger;