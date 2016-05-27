// Setup Logging with winston
var winston = require('winston');
var logsDirectory = __dirname + '/../logs';

var winLog = new winston.logger({
    transports: [
        new winston.transports.File({
        level: 'debug',
        filename: logsDirectory + "/winlog.log",
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxfiles: 5,
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
