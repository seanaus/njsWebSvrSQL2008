const configService = require('../services/configService');
const errLogService = require('../services/errorLogService');
const sqlService = require("../services/msqlService");
const sql = require('mssql/msnodesqlv8');
// const connect = async (req) => {
//     const auth = await authService.signIn({
//         body: {
//             email: config.adminMail,
//             password: config.adminHash
//         }
//     });
//     return auth
// }


const connect = async (req) => {
    try {
        console.log('checkConnection');
        const config = configService.mssqlServerConfig
        const con = await sql.connect(config);
        errLogService.log("Connected to SQL Server");
        con.close
        return true
    } catch (err) {
        console.log(`checkConnection: ${err}`);
        errLogService.log(`Can not connect to SQL Server ${err}`);
        return false
    }
}

module.exports = {
    connect
}