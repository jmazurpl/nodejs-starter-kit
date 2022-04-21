import express from "express";
import "reflect-metadata";
import "dotenv/config";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import compression from "compression";

import config from "./utils/config";
import logger from "./utils/logger";
import appDataSource from "./utils/add-data-source";

import errorHandler from "./middlewares/error.middleware";
import logRequest from "./middlewares/request.middleware";

import swaggerDoc from "./swagger.json";
import { RegisterRoutes } from "./routes";

appDataSource
    .initialize()
    .then(() => {
        const app = express();

        // Call middlewares
        app.use(cors());
        app.use(helmet());
        app.use(compression());
        app.use(express.json());
        app.use(logRequest);

        //Set all routes from routes folder
        RegisterRoutes(app);

        //Swagger
        if (config.swagger.enabled) {
            app.use(
                config.swagger.route,
                swaggerUi.serve,
                swaggerUi.setup(swaggerDoc)
            );
        }

        //Custom error handling middleware
        app.use(errorHandler);

        app.listen(config.app.port, config.app.host, () => {
            console.log("")
            console.log("-------------------------------------------------------");
            console.log(`--> Application is ready on http://${config.app.host}:${config.app.port}`);
            if (config.swagger.enabled) console.log(`--> Swagger is enabled on http://${config.app.host}:${config.app.port}${config.swagger.route}`);
            console.log("--> To shut it down, press <CTRL> + C at any time.");
            console.log("-------------------------------------------------------");
            console.log("")
        });

    })
    .catch((err) => {
        logger.error(err)
    });

