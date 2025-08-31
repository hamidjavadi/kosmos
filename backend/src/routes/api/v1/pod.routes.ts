import { Router } from 'express';

import {
  PodController,
  PodHistoryController,
} from '../../../controllers/pod.controller';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Pod
 *   description: Picture of the day API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Pod:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - explanation
 *         - date
 *         - image
 *       properties:
 *         id:
 *           type: string
 *           description: Auto-generated ID
 *         title:
 *           type: string
 *           description: Picture of the day title
 *         explanation:
 *           type: string
 *           format: string
 *           description: Picture of the day description
 *         date:
 *           type: string
 *           format: string
 *           description: Picture of the day date
 *         image:
 *           type: string
 *           format: string
 *           description: Picture of the day image
 *       example:
 *         id: d5fE_asz
 *         name: John Doe
 *         email: john.doe@example.com
 */

/**
 * @swagger
 * /pod:
 *   get:
 *     summary: Get the picture of the day
 *     tags: [Pod]
 *     responses:
 *       200:
 *         description: picture of the day
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pod'
 *       500:
 *         description: Server error
 *       404:
 *         description: Picture not found
 */
router.get('/', PodController);

/**
 * @swagger
 * /pod/history:
 *   get:
 *     summary: Get the last 10 picture of the day
 *     tags: [Pod]
 *     parameters:
 *      - in: query
 *        name: count
 *        schema:
 *          type: number
 *     responses:
 *       200:
 *         description: History of the picture of the day
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pod'
 *       500:
 *         description: Server error
 *       404:
 *         description: Not found
 */
router.get('/history', PodHistoryController);

export default router;
