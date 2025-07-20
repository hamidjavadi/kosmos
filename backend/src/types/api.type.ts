import { Request, Response } from 'express';

type ApiError = { error: string };

export interface IApiResponse<T> extends Response {
  json: (data: T | ApiError) => this;
}
export interface IApiRequest<T> extends Request {
  query: {
    [key: string]: string | undefined;
  } & T;
}
