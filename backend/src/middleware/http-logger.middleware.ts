import pino from 'pino';
import pinoHttp from 'pino-http';

import logger from '@/helpers/logger.helper';

const httpLoggerMiddleware = pinoHttp({
  logger,
  serializers: {
    err: pino.stdSerializers.err,
    req: pino.stdSerializers.req,
    res: pino.stdSerializers.res,
  },
  customLogLevel: (req, res, err) => {
    if (res.statusCode >= 400 && res.statusCode < 500) {
      return 'warn';
    } else if (res.statusCode >= 500 || err) {
      return 'error';
    }
    return 'info';
  },
});

export default httpLoggerMiddleware;
