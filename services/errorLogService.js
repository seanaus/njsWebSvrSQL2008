const fs = require('fs');
const path = require('path');
const configService = require('./configService');

const logError = (err) => {

    const line = [`ERROR,${csvText(err.code)},${getDateTime('GB')} \n`,
        `ERROR,${csvText(err.message)},${getDateTime('GB')} \n`]

    if(Array.isArray(line)) {
        line.forEach((item)=>{
            logToFile(configService.errLogDir, configService.errLogFileName, item);
        })
    }

}
const log = (message) => {
    const line = `INFO,${csvText(message)},${getDateTime('GB')} \n`;
    logToFile(configService.errLogDir, configService.errLogFileName, line);
}

const logToFile = (dir, filename, data) => {

    const file = path.join(__dirname, '../', dir, filename);

    return fs.appendFile(file, data, err => {
        if (err) {
            console.log(err)
            return false
        } else {
            console.log("Successfully logged to file");
            return true
        }
    })

}
const getDateTime = (timeZone = "UTC") => {
    return new Date().toLocaleString('en-GB', { timeZone: timeZone })
}
const csvText = (text) => {
    text = text.replace(",", "");
    text = text.replace(/\s+/g, ' ').trim();
    return text
}
module.exports = {
    logError,
    log,
    logToFile
} 