import type { IConfig } from './types';

const config: IConfig = {
  api_url: import.meta.env.VITE_API_URL,
};

export default config;
