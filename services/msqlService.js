'use strict';
const sql = require('mssql/msnodesqlv8');
// const configService = require('./configService');
const errLogService = require('./errorLogService');

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
    execSQL,
};
