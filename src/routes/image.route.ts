import { Router } from 'express';
const router = Router();

import { healthCheck } from '../controllers/image.controller';

router.get('/health', healthCheck);

export default router;
