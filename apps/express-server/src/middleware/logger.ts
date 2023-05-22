import { Request, Response, NextFunction } from 'express';
import chalk from 'chalk';
import consolelog from 'utils/consolelog';

const requestLogger = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const successGreen = chalk.hex('#3BAF2A');
	consolelog(`${chalk.bold(request.method)}`, `${chalk.white(request.url)}`);
	response.on('finish', () => {
		const isSuccess = response.statusCode === 200;
		console.log(
			`${
				isSuccess
					? successGreen(response.statusCode)
					: chalk.red(response.statusCode)
			} ${response.statusMessage}`
		);
	});
	next();
};

export default requestLogger;
