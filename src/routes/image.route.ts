import { Router } from 'express';
const router = Router();
import { upload } from '../services/image-upload-service';

import { healthCheck, uploadImage } from '../controllers/image.controller';

router.get('/health', healthCheck);
router.post('/upload', upload.single('image'), uploadImage);

export default router;
