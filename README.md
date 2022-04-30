# Node.js REST API starter kit

Yet another starter kit for creating REST API in seconds, heavily focused on easy maintanace and code readability.

## Tech stack

+ Express.js
+ TypeScript
+ TSOA
+ TypeORM
+ Swagger

## Folder structure

```
src
    server.ts           # The main entry point that create an instance of the application.
    routes.ts           # Routes for the API automatically generated by TSOA.
    swagger.json        # Swagger definition for all of the enoints also generated by TSOA.
    utils               # Helper objects extracted to separate files.
    models              # Classes and definitions for all buisness objects.
    middlewares         # Middlewares used by the application for various tasks
    controllers         # Put all your API controllers here.
    config              # Configuration files
```

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.
2. Install your dependencies

    ```
    yarn
    ```
3. Generate RSA Key Pair for JWT token signing
   
    ```
    openssl genrsa -des3 -out private.pem 2048
    openssl rsa -in private.pem -outform PEM -pubout -out public.pem
    ```
4. Start your app

    ```
    yarn dev
    ```
## Database and migrations

Database updates are maintaned by TypeORM migrations. Below you can find some snippets to work with migrations:

    ```
    yarn run migration:generate src/migrations/migration-name   # Adding new migration
    yarn run migration:show                                     # Displays pending migrations
    yarn run migration:run                                      # Runs pending migrations
    yarn run migration:revert                                   # Reverts last migration
    yarn run migration:create                                   # Creates empty migration
    ```
## Roadmap

- [ ] Authorization with JWT and refresh tokens
- [ ] Unit tests
- [ ] Dockerizing 
- [ ] ...
