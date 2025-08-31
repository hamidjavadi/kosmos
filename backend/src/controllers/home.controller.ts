import path from 'path';

import { NextFunction, Request, Response } from 'express';

export const homeController = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    return res.sendFile(path.join(__dirname, '../public', 'index.html'));
  } catch (error) {
    next(error);
  }
};
