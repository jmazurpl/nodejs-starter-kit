import { Request, Response, NextFunction } from "express";
import logger from "./../utils/logger";
import { ApiError } from "./../models/api-error.model";

function handleError(err: TypeError | ApiError, _req: Request, res: Response, _next: NextFunction) {
    let customError = err;

    if (!(err instanceof ApiError)) {
        customError = new ApiError(
            "Oooops! Server encountered internal error and won't be able to handle your request."
        );
    }

    logger.error(err);

    // we are not using the next function to prvent from triggering
    // the default error-handler. However, make sure you are sending a
    // response to client to prevent memory leaks in case you decide to
    // NOT use, like in this example, the NextFunction .i.e., next(new Error())
    res.status((customError as ApiError).status).send(customError);
};

export default handleError;
