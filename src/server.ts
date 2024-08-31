import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import config from 'config';
import logger from './utils/logger';
import { checkRedisConnection } from './redisDb/redisDb';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
	res.send('Hello, Express with TypeScript and dotenv!');
});

app.listen(port, () => {
	checkRedisConnection();
	console.log(`Server is running on http://localhost:${port}`);
});
