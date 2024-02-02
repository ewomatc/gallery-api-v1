import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
	cloudinary,
	params: async (req: Request, file: any) => {
		return {
			allowed_format: async (req: Request, file: any) => {
				['jpeg', 'jpg', 'png'];
			},
			folder: '/Gallery',
		};
	},
});

export default storage;
