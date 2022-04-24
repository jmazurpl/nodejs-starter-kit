import { DataSource } from "typeorm"
import dbConfig from "./../config/db.config";

const appDataSource = new DataSource({
    type: dbConfig.type,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    entities: ["src/entities/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: ["src/subscribers/**/*.ts"],
    logging: dbConfig.logging,
    synchronize: dbConfig.synchronize,
});

export default appDataSource;
