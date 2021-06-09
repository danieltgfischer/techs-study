import React, { useCallback, useContext, useEffect, useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { DatabaseConnectionContext } from '@/contexts/databaseConnection';
import { TechStudy } from '@/database/entities/Study';
import { Feature } from '@/database/entities/Feature';
import { Container, Description, MenuContainer, TrashButton } from './styles';

interface IFeature {
	name: string;
	description: string;
}
interface IState {
	name: string;
	description: string;
	features?: Feature[] | undefined;
}

export const Study: React.FC = ({ navigation, route }: any) => {
	const [study, setStudy] = useState<IState>({
		name: '',
		description: '',
		features: [],
	});
	const { connection } = useContext(DatabaseConnectionContext);
	const { id } = route.params;
	useEffect(() => {
		navigation.addListener('focus', () => {
			const studyRepository = connection.getRepository(TechStudy);
			studyRepository
				.findOne(id)
				.then(({ name, description }) => setStudy({ name, description }));
		});
	}, [connection, id, navigation]);

	const deleteStudy = useCallback(async () => {
		try {
			const studyRepository = connection.getRepository(TechStudy);
			const studyTech = await studyRepository.findOne(id);
			await studyRepository.remove(studyTech);
			navigation.navigate('Home');
		} catch (error) {
			console.error(error);
		}
	}, [connection, id, navigation]);

	return (
		<Container>
			<MenuContainer>
				<TrashButton onPress={deleteStudy}>
					<EvilIcons name="trash" size={40} color="black" />
				</TrashButton>
			</MenuContainer>
			{study.description !== '' && (
				<Description>{`"${study.description}"`}</Description>
			)}
		</Container>
	);
};
