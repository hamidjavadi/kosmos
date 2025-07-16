import { Router } from 'express';

import { homeController } from '../controllers/home.controller';
import { pictureOfTheDayController } from '../controllers/picture-of-the-day.controller';

const router = Router();

router.get('/', homeController);
router.get('/api/v1/picture-of-the-day', pictureOfTheDayController);

export default router;
