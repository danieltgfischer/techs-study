import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	OneToMany,
} from 'typeorm';
import { Feature } from './Feature';

@Entity()
export class TechStudy extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column('text')
	description: string;

	@OneToMany(() => Feature, features => features.tech, {
		cascade: true,
		nullable: false,
	})
	features: Feature;
}
