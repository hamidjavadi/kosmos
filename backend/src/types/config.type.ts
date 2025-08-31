export type NodeENV = 'development' | 'production';

interface IApis {
  POD?: string;
}

export interface IConfig {
  port: number;
  nodeEnv: NodeENV | undefined;
  mongodbConnectionString: string | undefined;
  apis?: IApis;
  nasaAPIKey?: string;
  swagger: {
    definition: {
      openapi: string;
      info: {
        title: string;
        version: string;
        description: string;
      };
      servers: [
        {
          url: string;
          description: string;
        },
      ];
    };
    apis: string[];
  };
}
