import { Controller, Get, Route } from "tsoa";
import logger from '../utils/logger'

interface PingResponse {
    message: string;
}

@Route("ping")
export class PingController extends Controller {
    @Get("/")
    public async getMessage(): Promise<PingResponse | string> {
        logger.info("Responding to ping request");
        return {
            message: "pong",
        };
    }
}
