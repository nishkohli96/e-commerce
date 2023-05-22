import os from 'os';
import chalk from 'chalk';
import app from './app';

const port = process.env.PORT || 5000;
const hostName = os.hostname();

app.listen(port, () => {
	console.log(
		chalk.yellow(
			`[ ⚡️ ${chalk.magenta(hostName)} ⚡️ ]`,
			chalk.cyan(`Server running on port ${port}`)
		)
	);
});
