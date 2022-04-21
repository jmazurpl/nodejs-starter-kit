import { Request, Response, NextFunction } from "express";
import morgan, { StreamOptions } from "morgan";
import logger from "./../utils/logger";

// Override the stream method by telling
// Morgan to use our custom logger instead of the console.log
const stream: StreamOptions = {
    write: (message) => logger.log("http", message.substring(0, message.lastIndexOf("\n"))),
};

function logRequest(req: Request, res: Response, next: NextFunction) {
    morgan("short", { stream })(req, res, next);
};

export default logRequest;
