import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { Express } from 'express';

import config from '@/config';
import podRoutes from '@/routes/api/v1/pod.routes';
import homeRoutes from '@/routes/home';

const configRouter = (server: Express) => {
  server.use('/', homeRoutes);
  server.use('/api/v1/pod', podRoutes);
  server.use(
    '/api/v1/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerJsdoc(config.swagger)),
  );
};

export default configRouter;
