import React, { useContext, useEffect, useState } from 'react';
import { DatabaseConnectionContext } from '@/contexts/databaseConnection';
import { TechStudy } from '@/database/entities/Study';
import { TechItem } from '@/components/techItems';
import { EmptyTechContainer } from '@/components/emptyTechs';
import {
	Button,
	ButtonLabel,
	Container,
	FlatList,
	flatListStyle,
	Title,
} from './styles';

export const Home: React.FC = ({ navigation }: any) => {
	const { connection } = useContext(DatabaseConnectionContext);
	const [techs, setTechs] = useState([]);

	useEffect(() => {
		const techsRepository = connection.getRepository(TechStudy);
		techsRepository.find().then(techsDb => setTechs(techsDb));
		navigation.addListener('focus', () => {
			techsRepository.find().then(techsDb => {
				console.log(techsDb);
				setTechs(techsDb);
			});
		});
	}, [connection, navigation]);

	const renderItem = ({ item: { name, description } }) => (
		<TechItem {...{ name, description }} />
	);

	return (
		<Container>
			<Button onPress={() => navigation.navigate('Adicionar Tech')}>
				<ButtonLabel>Adicionar</ButtonLabel>
			</Button>
			<Title>Tecnologias:</Title>
			<FlatList
				data={techs}
				renderItem={renderItem}
				keyExtractor={item => String(item.id)}
				contentContainerStyle={flatListStyle.content}
				ListEmptyComponent={EmptyTechContainer}
			/>
		</Container>
	);
};
