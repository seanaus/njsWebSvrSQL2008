"use strict"
const sqlService = require('../services/msqlService');
const configService = require('../services/configService');
const errLogService = require('../services/errorLogService');
const getData = async(req, res) => {

    const config = configService?.mssqlServerConfig;

    if(config && config!== null && config!=="") {
        const query = req?.query?.query;
        if(query && query!== null && query!=="") {
            res.json(await sqlService.execSQL(config, query))
        } else {
            errLogService.log("Invalid: No Query Supplied To Run");
            res.json({})
        }
    } else {
        errLogService.log("Invalid: SQL Server Configuration");
        res.json({})
    }

}
module.exports = {
    getData
}