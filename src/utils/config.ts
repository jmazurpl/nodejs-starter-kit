import { LoggerOptions } from "typeorm/logger/LoggerOptions";

const config = {
    env: process.env.NODE_ENV || "development",
    isProduction: process.env.NODE_ENV === "production",
    isDevelopment: process.env.NODE_ENV === "development",
    app: {
        name: process.env.npm_package_name,
        version: process.env.npm_package_version,
        host: process.env.APP_HOST || "localhost",
        port: parseInt(process.env.APP_PORT as string, 10) || 3000
    },
    db: {
        type: process.env.TYPEORM_CONNECTION as any,
        host: process.env.TYPEORM_HOST,
        port: parseInt(process.env.TYPEORM_PORT as string, 10),
        username: process.env.TYPEORM_USERNAME,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_DATABASE,
        synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE).valueOf(),
        logging: process.env.TYPEORM_LOGGING as LoggerOptions
    },
    swagger: {
        enabled: Boolean(process.env.SWAGGER_ENABLED).valueOf(),
        route: process.env.SWAGGER_ROUTE || "swagger"
    }
};

export default config;
