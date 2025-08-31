import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import express, { Express } from 'express';

import config from '@/config';
import podRoutes from '@/routes/api/v1/pod.routes';
import homeRoutes from '@/routes/home';

const configRouter = (server: Express) => {
  server.use('/', homeRoutes);
  server.use(
    '/assets',
    express.static(path.join(__dirname, '../public/assets')),
  );
  // server.use('/css', express.static(path.join(__dirname, '../public/css')));
  server.use('/api/v1/pod', podRoutes);
  server.use(
    '/api/v1/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsdoc(config.swagger)),
  );
};

export default configRouter;
