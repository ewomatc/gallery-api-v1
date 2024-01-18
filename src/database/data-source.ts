import * as dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';
import { Image } from '../entities/Image';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	logging: true,
	synchronize: true,
	entities: [Image],
	subscribers: [],
});
