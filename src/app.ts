import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import bodyParser from 'body-parser';
import cors from 'cors';
import 'reflect-metadata';
import { AppDataSource } from './database/data-source';
import imageRouter from './routes/image.route';

const app: Express = express();

// use middlewares
app.use(bodyParser.json());
app.use(cors());

app.get('/api/health', (req: Request, res: Response) => {
	return res.status(200).json({
		statusCode: '00',
		status: 'success',
		message: 'Server is active',
	});
});
// use routes
app.use('/api/images', imageRouter);

// connect to db
AppDataSource.initialize()
	.then(async () => {
		console.log('Connected to database');
	})
	.catch((error) => {
		console.error('Error connecting to database', error);
	});

const PORT = process.env.PORT;
app.listen(PORT, () => [console.log(`Server started on port ${PORT}`)]);
