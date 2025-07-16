import { Response } from 'express';

type ApiError = { error: string };

export interface IApiResponse<T> extends Response {
  json: (data: T | ApiError) => this;
}
