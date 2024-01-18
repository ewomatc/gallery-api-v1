import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('images')
export class Image {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	url: string;

	@Column({ length: 255 })
	title: string;

	@Column()
	description: string;
}
