import { json } from 'express';
import express from 'express';

import config from '../config';
import logger from '../helpers/logger.helper';
import corsMiddleware from '../middleware/cors.middleware';
import globalErrorHandler from '../middleware/globalErrorHandler.middleware';
import httpLogger from '../middleware/httpLogger.middleware';
import routes from '../routes/index';

const server = express();

server.use(json());
server.use(corsMiddleware);
server.use(httpLogger);
server.use(routes);

server.use(globalErrorHandler);

process.on('unhandledRejection', (error) => {
  logger.error({ err: error }, 'An unhandled error occurred');
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err);
  process.exit(1);
});

server.listen(config.port, () => {
  logger.info(`Server is running on http://localhost:${config.port}`);
});

export default server;
