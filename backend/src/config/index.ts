import dotenv from 'dotenv';

import { IConfig, NodeENV } from './types';

dotenv.config();

const config: IConfig = {
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV as NodeENV,
  mongodbConnectionString: process.env.MONGO_DB_CONNECTION_STRING,
};

export default config;
