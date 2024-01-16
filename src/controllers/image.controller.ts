import { Request, Response } from 'express';
import { upload, drive } from '../services/image-upload-service';

export const healthCheck = (req: Request, res: Response) => {
	return res.status(200).json({
		statusCode: '00',
		status: 'success',
		message: 'Server is active',
	});
};

// upload new image
export const uploadImage = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
