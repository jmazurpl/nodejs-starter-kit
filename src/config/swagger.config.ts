const config = {
    enabled: Boolean(process.env.SWAGGER_ENABLED).valueOf(),
    route: process.env.SWAGGER_ROUTE || "swagger"
}

export default config;
