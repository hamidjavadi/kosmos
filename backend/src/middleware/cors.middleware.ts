import cors, { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
  methods: ['GET', 'POST'],
};

const middleware = cors(corsOptions);

export default middleware;
