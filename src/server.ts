import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import config from 'config';
import logger from './utils/logger';
import { checkRedisConnection } from './redisDb/redisDb';
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(routes);

app.listen(port, () => {
	checkRedisConnection();
	logger.info(`Server is running on http://localhost:${port}`);
});
