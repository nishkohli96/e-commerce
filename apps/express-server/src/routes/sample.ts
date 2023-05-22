import express, { Request, Response } from 'express';
import { RequestBody } from 'types/request';

const sampleRoute = express.Router();

sampleRoute.get(
	'/test',
	async (request: Request<RequestBody>, response: Response) => {
		const { body } = request;
		response.append('Content-Length', '5089990');
		response.status(200).send(`Received body ${JSON.stringify(body)}`);
	}
);

export default sampleRoute;
