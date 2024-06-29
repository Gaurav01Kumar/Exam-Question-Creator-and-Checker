// var { createLogger, transports, format } = require('winston');
// const { combine, splat, timestamp, printf } = format;
// var dailyRotateFile = require('winston-daily-rotate-file');
const moment = require('moment');
var fs = require('fs');
var path = require('path');
var winston = require('winston');
require('winston-daily-rotate-file');
let { environment, logDirectory } = require('../../config');
let dir = logDirectory;
if (!dir) dir = path.resolve('log');
if (!fs.existsSync(dir)) {
  // Create the directory if it does not exist
  fs.mkdirSync(dir);
}
const loggers = {};
const logLevel = environment === 'development' ? 'debug' : 'warn';
const isLog=true;
const isLogError=true;


var transport = new winston.transports.DailyRotateFile({
  filename: `${dir}/%DATE%.log`,
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  timestamp: true,
});

transport.on('rotate', function (oldFilename, newFilename) {
  // do something fun
});

var logger = winston.createLogger({
  transports: [transport],
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
});

// const options = {
// 	file: {
// 		level: logLevel,
// 		//filename: dir + '/%DATE%.log',
// 		filename: dir +'/'+formateDate(new Date())+ '.log',
// 		datePattern: 'YYYY-MM-DD',
// 		zippedArchive: true,
// 		timestamp: true,
// 		handleExceptions: true,
// 		humanReadableUnhandledException: true,
// 		prettyPrint: true,
// 		json: true,
// 		maxSize: '20m',
// 		colorize: true,
// 		maxFiles: '14d',
// 	},
// };
// const logger = createLogger({
// 	transports: [
// 		new transports.Console({
// 			level: logLevel,
// 			format: format.combine(format.errors({ stack: true }), format.prettyPrint()),
// 		}),

// 		new transports.File({
// 			level: logLevel,
// 			filename: options.file.filename,
// 			//filename: formateDate(new Date()),
// 			//format: format.combine(format.errors({ stack: true }), format.prettyPrint()),
// 		})
// 		// new transports.File({
// 		// 	filename: path.join(__dirname, 'error.log'),
// 		// 	level: 'info',
// 		// 	maxsize: 500
// 		// })
// 	],
// 	// format:new format.timestamp({
// 	// 	format: 'MMM-DD-YYYY HH:mm:ss'
// 	// }),

// 	exceptionHandlers: [new dailyRotateFile(options.file)],
// 	exitOnError: false, // do not exit on handled exceptions
// });

loggers.ERROR = function (error) {
  //console.log(moment().format("MM/DD/YYYY hh:mm:ss"));
  //logger.info(moment().format("MM/DD/YYYY hh:mm:ss"));
  logger.error(error);
};

loggers.INFO = function (info) {
  logger.info(info);
};
loggers.LOG=function(info){
  if(isLog){
    console.log(info);
  }
}
loggers.ERROR_LOG=function(info){
  if(isLogError){
    console.error(info);
  }
}
module.exports = loggers;
