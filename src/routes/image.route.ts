import { Router } from 'express';
const router = Router();
import storage from '../services/image-upload-service';
import { uploadImage } from '../controllers/image.controller';
import multer from 'multer';
const upload = multer({ storage });

router.post('/image', upload.single('image'), uploadImage);

export default router;
