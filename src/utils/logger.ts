import winston from "winston";
import "winston-daily-rotate-file";

const levels = {
    error: 0,
    warn: 1,
    http: 2,
    info: 3,
    debug: 4,
}

const debugfilter = winston.format((info) =>
    (info.level === "debug" || info.level === "info" ? info : false)
);

const level = () => {
    const env = process.env.NODE_ENV || "development"
    const isDevelopment = env === "development"
    return isDevelopment ? "debug" : "http"
}

const defaultFormat = winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.errors({ stack: true })
);

const consoleFormat = winston.format.combine(
    winston.format.colorize({
        colors: { debug: "cyan", http: "magenta", info: "blue", error: "red", warn: "yellow" },
    }),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.align(),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level} ${info.message}`
    )
);

const debugFormat = winston.format.combine(
    debugfilter(),
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.align(),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level} ${info.message}`
    )
);

const logger = winston.createLogger({
    level: level(),
    levels,
    format: defaultFormat,
    transports: [
        new winston.transports.Console({
            format: consoleFormat,
        }),
        new winston.transports.DailyRotateFile({
            filename: "%DATE%.log",
            dirname: "./logs/debug",
            zippedArchive: true,
            maxFiles: "7d",
            format: debugFormat
        }),
        new winston.transports.DailyRotateFile({
            filename: "%DATE%.log",
            dirname: "./logs/error",
            zippedArchive: true,
            maxFiles: "14d",
            level: "warn",
            format: defaultFormat
        })
    ],
    exitOnError: false
});

export default logger;
