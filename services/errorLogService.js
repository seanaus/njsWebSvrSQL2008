const fs = require('fs');
const path = require('path');
const configService = require('./configService');
const logError = (err) => {

    // const code = cleanText(err.code);
    // const message = cleanText(err.message);
    // const stack = err.stack;
    // const dateTime = new Date().toLocaleString('en-GB').replace(',', ':');

    const line = `ERROR,${cleanText(err.code)} ${cleanText(err.message)},${getDateTime()} \n`;
    logToFile(configService.errLogDir, configService.errLogFileName, line);

}
const log = (message) => {

    // const dateTime = new Date().toLocaleString('en-GB').replace(',', ':');
    const line = `INFO,${cleanText(message)},${getDateTime()} \n`;
    logToFile(configService.errLogDir, configService.errLogFileName, line);
}
// const logToFile = async (message) => {
//     const fs = require('fs/promises');
//     console.log('logToFile');
//     try {
//         await fs.writeFile('/Users/seana/ErrorLogFile.txt', message);
//     } catch (err) {
//         console.log(err);
//     }
//     // fs.writeFile('/errLog.txt', message, err => {
//     //     if (err) {
//     //         console.error(err);
//     //     }
//     // });
//     fs.close
// }
const logToFile = (dir, filename, data) => {

    // console.log(`DIR: ${dir}`);
    // console.log(`FILENAME: ${filename}`);
    // console.log(`DATA: ${data}`);
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
const cleanText = (text) => {
    text = text.replace(",", "");
    text = text.replace(/\s+/g, ' ').trim();
    return text
}
module.exports = {
    logError,
    log,
    logToFile
} 