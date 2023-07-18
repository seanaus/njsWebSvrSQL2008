'use strict';
const sql = require('mssql/msnodesqlv8');
const errLogService = require('./errorLogService');
const configService = require('../services/configService');
const checkConnection = async () => {
  try {
    console.log('checkConnection');
    const config = configService.mssqlServerConfig
    const con = await sql.connect(config);
    errLogService.logToFile("Connected to SQL Server");
    con.close
    return true
  } catch (err) {
    console.log(`checkConnection: ${err}`);
    errLogService.logToFile(`Can not connect to SQL Server ${err}`);
    return false
  }
}
const execSQL = async (config, query) => {
  let rtn;
  const connection = await sql.connect(config);

  if (connection.err) {
    console.log(err);
    return {
      error: err,
    };
  }

  const request = new sql.Request();
  const result = await request.query(query);

  if (result.err) {
    return {
      error: result.err,
    };
  }
  sql.close;
  return result.recordset;
};
module.exports = {
  checkConnection,
  execSQL
};
