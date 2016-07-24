// Setup Logging with winston
var path = require('path');
var winston = require('winston');
var logsDirectory = path.join(__dirname, '/../logs');
var logFileName = path.join(logsDirectory, "/winlog.log");

var winLog = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'debug',
            filename: logFileName,
            handleExceptions: true,
            json: true,
            maxsize: 5242880,
            maxfiles: 5
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorise: true
        })
    ],
    exitOnError: false
});

winLog.emitErrs = true;

// examples of logging
// winLog.log('info', "hello log files");
// winlog.log('debug', "this is a debug file!");

module.exports = winLog;
