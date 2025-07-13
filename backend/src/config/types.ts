export interface IConfig {
  port: number;
  nodeEnv: NodeENV | undefined;
  mongodbConnectionString: string | undefined;
}

export type NodeENV = 'development' | 'production';
