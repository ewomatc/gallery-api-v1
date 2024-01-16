import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('images')
export class Image {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: false })
	picture: string;

	@Column({ nullable: false, length: 255 })
	title: string;

	@Column({ nullable: false })
	description: string;
}
