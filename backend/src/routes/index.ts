import { Router } from 'express';

import { homeController } from '../controllers/home.controller';
import {
  pictureOfTheDayController,
  pictureOfTheDayHistoryController,
} from '../controllers/picture-of-the-day.controller';

const router = Router();

router.get('/', homeController);
router.get('/api/v1/picture-of-the-day', pictureOfTheDayController);
router.get(
  '/api/v1/picture-of-the-day-history',
  pictureOfTheDayHistoryController,
);

export default router;
