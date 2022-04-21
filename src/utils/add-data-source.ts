import { DataSource } from "typeorm"
import config from "./config";

const appDataSource = new DataSource({
    type: config.db.type,
    host: config.db.host,
    port: config.db.port,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    entities: ["src/entities/**/*.ts"],
    migrations: ["src/migrations/**/*.ts"],
    subscribers: ["src/subscribers/**/*.ts"],
    logging: config.db.logging,
    synchronize: config.db.synchronize,
});

export default appDataSource;
