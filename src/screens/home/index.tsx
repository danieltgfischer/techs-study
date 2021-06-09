import React, { useContext, useEffect, useState } from 'react';
import { DatabaseConnectionContext } from '@/contexts/databaseConnection';
import { TechStudy } from '@/database/entities/Study';
import { TechItem } from '@/components/techItems';
import { EmptyTechContainer } from '@/components/emptyTechs';
import { Container, FlatList, flatListStyle, Title } from './styles';

export const Home: React.FC = () => {
	const { connection } = useContext(DatabaseConnectionContext);
	const [techs, setTechs] = useState([
		// { name: 'Flutter', description: 'mobile app', id: '1' },
		// { name: 'React Native', description: 'mobile app', id: '2' },
	]);

	// useEffect(() => {
	// 	const techsRepository = connection.getRepository(TechStudy);
	// 	techsRepository.find().then(techsDb => setTechs(techsDb));
	// }, [connection]);

	const renderItem = ({ item: { name, description } }) => (
		<TechItem {...{ name, description }} />
	);

	return (
		<Container>
			<Title>Tecnologias:</Title>
			<FlatList
				data={techs}
				renderItem={renderItem}
				keyExtractor={item => item.id}
				contentContainerStyle={flatListStyle.content}
				ListEmptyComponent={EmptyTechContainer}
			/>
		</Container>
	);
};
