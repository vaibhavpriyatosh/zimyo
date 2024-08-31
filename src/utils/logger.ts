import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
	level: 'info',
	format: combine(
		timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		colorize(),
		myFormat
	),
	transports: [
		new transports.Console(),
		new transports.File({ filename: 'utils_logger.log' }),
	],
});

export default logger;
