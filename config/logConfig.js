/*
* logConfig.js
* Sets up morgan and winston for application and access logging.
*
*/

var fs = require('fs');
var path = require('path');
var winston = require('winston');
var FileStreamRotator = require('file-stream-rotator');

var logsDirectory = path.join(__dirname, '/../logs');
var appLogDirectory = path.join(logsDirectory, '/appLog.log');

// ensure logging directory exists
if (fs.existsSync(logsDirectory)) {
} else {
    fs.mkdirSync(logsDirectory);
}

// create a rotating write system for morgan
var accessLogStream = FileStreamRotator.getStream({
    filename: logsDirectory + "access-%DATE%.log",
    frequency: "daily",
    verbose: false,
    date_format: "YYYY-MM-DD"
});

var winLog = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'debug',
            filename: appLogDirectory,
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

module.exports.appLog = winLog;
module.exports.stream = accessLogStream;
