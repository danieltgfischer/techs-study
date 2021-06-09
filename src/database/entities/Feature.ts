import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
	ManyToOne,
} from 'typeorm';
import { TechStudy } from './Study';

@Entity()
export class Feature extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	feature: string;

	@Column('text')
	description: string;

	@ManyToOne(() => TechStudy, tech => tech.features)
	tech: TechStudy;
}
