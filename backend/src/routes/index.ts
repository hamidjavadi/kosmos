import { Router } from 'express';

import HomeController from '../controllers/home.controller';

const router = Router();

router.get('/', HomeController);
// router.get('/api/v1/picture-of-the-day');

export default router;
