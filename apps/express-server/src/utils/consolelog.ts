import chalk from 'chalk';

export default function generateProcessLog(task: string, status: string): void {
	console.log(
		chalk.yellow('[', chalk.magenta(`${task}`), ']::'),
		chalk.cyan(`${status}`)
	);
}
