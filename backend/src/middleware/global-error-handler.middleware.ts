import { Request, Response } from 'express';

import logger from '../helpers/logger.helper';

const globalErrorHandler = (err: Error, req: Request, res: Response) => {
  logger.debug('Error:', err.message);
  res.status(500).json({
    error: { message: err.message },
  });
};

export default globalErrorHandler;
