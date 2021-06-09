import React, { useContext, useEffect, useState } from 'react';
import { DatabaseConnectionContext } from '@/contexts/databaseConnection';
import { TechStudy } from '@/database/entities/Study';
import { TechItem } from '@/components/techItems';
import { EmptyTechContainer } from '@/components/emptyTechs';
import {
	Button,
	ButtonLabel,
	Container,
	ContainerButton,
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
				setTechs(techsDb);
			});
		});
	}, [connection, navigation]);

	const renderItem = ({ item: { name, description, id } }) => (
		<TechItem {...{ name, description, id }} />
	);

	return (
		<Container>
			<ContainerButton>
				<Button onPress={() => navigation.navigate('Adicionar_Tech')}>
					<ButtonLabel>Adicionar</ButtonLabel>
				</Button>
			</ContainerButton>
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
