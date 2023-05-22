import express, { Express, Request, Response } from 'express';
import { sampleRoute } from 'routes';
import requestLogger from 'middleware/logger';

const app: Express = express();
app.use(express.json());
app.use(requestLogger);

app.get('/', (_: Request, response: Response) => {
	response.status(200).send(`Express + TypeScript Server`);
});

app.use('', sampleRoute);

/* To be written at last */
app.get('*', (_: Request, response: Response) => {
	response.status(404).send('Requested Route Not found');
});

export default app;
