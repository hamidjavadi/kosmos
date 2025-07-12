import { NextFunction, Request, Response } from 'express';

const HomeController = (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = {
      message: 'hello',
    };
    res.json(response);
  } catch (error) {
    next(error);
  }
};

export default HomeController;
