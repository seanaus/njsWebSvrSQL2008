"use-strict"
require('dotenv').config();

const { 
    PORT,
    HOST,
    URL,
    PRODUCTION,
    MSSQL_DRIVER,
    MSSQL_SERVER,
    MSSQL_DATABASE,
    MSSQL_ENCRYPT,
    MSSQL_PORT,
    MSSQL_OPTIONS_TRUSTED_CONNECTION 
} = process.env;

const SQL_SERVER_CONFIG = {
    driver: MSSQL_DRIVER,
    server: MSSQL_SERVER,
    database: MSSQL_DATABASE,
    encrypt: MSSQL_ENCRYPT,
    port: MSSQL_PORT,
    options: {
        trustedconnection: MSSQL_OPTIONS_TRUSTED_CONNECTION
    } 
}

module.exports = {
    port: PORT,
    host: HOST,
    url: URL,
    production: PRODUCTION,
    mssqlServerConfig: SQL_SERVER_CONFIG
}