import mongoose from 'mongoose';

import { json } from 'express';
import express from 'express';

import config from '../config';
import logger from '../helpers/logger.helper';
import corsMiddleware from '../middleware/cors.middleware';
import globalErrorHandler from '../middleware/global-error-handler.middleware';
import httpLogger from '../middleware/http-logger.middleware';
import routes from '../routes/index';

const server = express();

server.use(json());
server.use(corsMiddleware);
server.use(routes);
server.use(globalErrorHandler);

if (config.nodeEnv === 'development') {
  server.use(httpLogger);
}

process.on('unhandledRejection', (error) => {
  logger.error({ err: error }, 'An unhandled error occurred');
});

process.on('uncaughtException', (err) => {
  logger.info(`Uncaught Exception thrown: ${err.message}`);
  process.exit(1);
});

mongoose
  .connect(config.mongodbConnectionString as string)
  .then(() => logger.info('Database: is connected'))
  .catch((error: { message: string }) => logger.error(error.message));

server.listen(config.port, () => {
  logger.info(`Server is running on http://localhost:${config.port}`);
});

export default server;
