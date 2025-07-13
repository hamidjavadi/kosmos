import { NodeENV } from './config/types';

declare namespace NodeJS {
  interface ProcessEnv {
    NASA_API_KEY: string;
    PORT?: string;
    NODE_ENV: NodeENV;
    MONGO_DB_CONNECTION_STRING: string;
  }
}
