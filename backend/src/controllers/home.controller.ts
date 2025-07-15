import { NextFunction, Request, Response } from 'express';

export const homeController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const response = {
      message: 'hello',
    };
    res.json(response);
  } catch (error) {
    next(error);
  }
};
