import React, { useContext, useEffect, useState } from 'react';
import { DatabaseConnectionContext } from '@/contexts/databaseConnection';

import { Container } from './styles';

export const Study: React.FC = ({ navigation }: any) => {
	const { connection } = useContext(DatabaseConnectionContext);

	useEffect(() => {
		// const techsRepository = connection.getRepository(TechStudy);
		// techsRepository.find().then(techsDb => setTechs(techsDb));
		// navigation.addListener('focus', () => {
		// 	techsRepository.find().then(techsDb => {
		// 		setTechs(techsDb);
		// 	});
		// });
	}, [connection, navigation]);

	return <Container />;
};
