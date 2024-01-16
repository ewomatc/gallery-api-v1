import { Request, Response } from 'express';

export const healthCheck = (req: Request, res: Response) => {
	return res.status(200).json({
		statusCode: '00',
		status: 'success',
		message: 'Server is active',
	});
};
