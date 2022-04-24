const config = {
    env: process.env.NODE_ENV || "development",
    isProduction: process.env.NODE_ENV === "production",
    isDevelopment: process.env.NODE_ENV === "development",
    appName: process.env.npm_package_name,
    version: process.env.npm_package_version,
    host: process.env.APP_HOST || "localhost",
    port: parseInt(process.env.APP_PORT as string, 10) || 3000
}

export default config;
