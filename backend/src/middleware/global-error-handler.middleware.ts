import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error('Error:', err.message);
  res.status(500).json({
    error: { message: err.message },
  });
};

export default globalErrorHandler;
