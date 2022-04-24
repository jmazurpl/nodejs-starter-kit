import { LoggerOptions } from "typeorm/logger/LoggerOptions";

const config = {
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT as string, 10),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE).valueOf(),
    logging: process.env.TYPEORM_LOGGING as LoggerOptions
}

export default config;
