import React, { useContext, useEffect } from 'react';
import { DatabaseConnectionContext } from '@/contexts/databaseConnection';
import { TechStudy } from '@/database/entities/Study';
import { Container } from './styles';

export const Home: React.FC = () => {
	const { connection } = useContext(DatabaseConnectionContext);
	useEffect(() => {
		const techsRepository = connection.getRepository(TechStudy);
		techsRepository.find().then(res => console.table({ res }));
	}, [connection]);
	return <Container />;
};
