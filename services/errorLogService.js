
const logError = (err) => {

    const code = err.code;
    const message = err.message;
    const stack = err.stack;

    console.log(`ERROR CODE: ${code}`);
    console.log(`ERROR MESSAGE: ${message}`);
    console.log(`ERROR STACK: ${stack}`);

}
const log = (message) => {
    console.log(`MESSAGE: ${message}`);
}
const logToFile = async (message) => {
    const fs = require('fs/promises');
    console.log('logToFile');
    try {
        await fs.writeFile('/Users/seana/ErrorLogFile.txt', message);
    } catch (err) {
        console.log(err);
    }
    // fs.writeFile('/errLog.txt', message, err => {
    //     if (err) {
    //         console.error(err);
    //     }
    // });
    fs.close
}
module.exports = {
    logError,
    log,
    logToFile
} 