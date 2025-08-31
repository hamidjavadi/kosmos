/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

import logger from '../helpers/logger.helper';

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  logger.error(err.message);
  return res.json({ error: err.message });
};

export default globalErrorHandler;
