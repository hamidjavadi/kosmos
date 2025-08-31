import { NodeENV } from './config.type';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      NODE_ENV: NodeENV;
      MONGO_DB_CONNECTION_STRING: string;
      NASA_API_KEY: string;
      SWAGGER_SERVER: string;
    }
  }
}
