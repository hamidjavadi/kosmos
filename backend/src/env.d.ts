declare namespace NodeJS {
  interface ProcessEnv {
    NASA_API_KEY: string;
    PORT?: string;
    NODE_ENV: 'development' | 'production';
  }
}
