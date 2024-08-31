import { createClient } from 'redis';
import logger from '../utils/logger';

import dotenv from 'dotenv';
dotenv.config();

const client = createClient({
	url: process.env.REDIS_HOST?.toString(),
});

client.on('connect', () => {
	logger.info('Redis Connection Successful');
});

client.on('error', (err) => {
	logger.error('Redis error:', err);
});

client.connect().catch(console.error);

export default client;
