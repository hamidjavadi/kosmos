import dotenv from 'dotenv';

import { IConfig } from './types';

dotenv.config();

const config: IConfig = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;
