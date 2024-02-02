import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { Image } from '../entities/Image';

// upload new image
export const uploadImage = async (req: Request, res: Response) => {
	try {
		console.log(req.file);

		const { title, description } = req.body;

		if (!req.body) {
			return res.status(400).json({
				statusCode: '04',
				status: 'Bad Request',
				message: 'Invalid request',
			});
		}

		if (!req.file) {
			return res.status(400).json({
				statusCode: '04',
				status: 'Bad Request',
				message: 'No image file uploaded',
			});
		}

		const imageUrl = req.file.path;

		const imageRepository = AppDataSource.getRepository(Image);
		const savedImage = await imageRepository.save({
			url: imageUrl,
			title,
			description,
		});

		return res.status(200).json({
			statusCode: '00',
			status: 'Success',
			message: 'Image saved successfully',
			data: {
				image: savedImage,
			},
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
