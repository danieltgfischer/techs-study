import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { Form } from '@unform/mobile';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import { DatabaseConnectionContext } from '@/contexts/databaseConnection';
import { TechStudy } from '@/database/entities/Study';
import { Feature } from '@/database/entities/Feature';
import { Keyboard, Modal } from 'react-native';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Input } from '@/components/input';
import { FeatureItem } from '@/components/featureItem';
import {
	AddButton,
	Container,
	ContainerModal,
	Description,
	MenuContainer,
	ModalTitle,
	IconButton,
	KeyboardDismissContainer,
	ButtonLabel,
	FlatList,
	flatListStyle,
} from './styles';

interface IData {
	feature: string;
	description: string;
}

interface IState {
	name: string;
	description: string;
	features?: Feature;
}

export const Study: React.FC = ({ navigation, route }: any) => {
	const formRef = useRef<FormHandles>(null);

	const [study, setStudy] = useState<IState>({
		name: '',
		description: '',
	});
	const [modalVisible, setModalVisible] = useState(false);
	const { connection } = useContext(DatabaseConnectionContext);
	const { id } = route.params;
	useEffect(() => {
		navigation.addListener('focus', () => {
			const studyRepository = connection.getRepository(TechStudy);
			studyRepository
				.findOne(id, { relations: ['features'] })
				.then(response => setStudy({ ...response }));
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

	const handleSubmit: SubmitHandler<IData> = useCallback(
		async ({ feature, description }: IData) => {
			try {
				const studyRepository = connection.getRepository(TechStudy);
				const studyTech = await studyRepository.findOne(id);
				const featureInstance = new Feature();
				featureInstance.feature = feature;
				featureInstance.description = description;
				featureInstance.tech = studyTech;
				await connection.manager.save(featureInstance);
				const response = await studyRepository.findOne(id, {
					relations: ['features'],
				});
				setStudy({ ...response });
				formRef.current.reset();
			} catch (error) {
				console.error(error);
			}
		},
		[connection, id],
	);

	const renderItem = ({ item: { feature, description, id: featureId } }) => (
		<FeatureItem {...{ feature, description, featureId }} />
	);

	return (
		<>
			<Container>
				<MenuContainer>
					<IconButton onPress={deleteStudy}>
						<EvilIcons name="trash" size={40} color="black" />
					</IconButton>
				</MenuContainer>
				{study.description !== '' && (
					<Description>{`"${study.description}"`}</Description>
				)}
				<AddButton onPress={() => setModalVisible(!modalVisible)}>
					<ButtonLabel>Adicionar feature</ButtonLabel>
				</AddButton>
				<FlatList
					data={study.features}
					renderItem={renderItem}
					keyExtractor={item => String(item.id)}
					contentContainerStyle={flatListStyle.content}
					// ListEmptyComponent={EmptyTechContainer}
				/>
			</Container>
			<Modal animationType="slide" transparent visible={modalVisible}>
				<KeyboardDismissContainer onPress={Keyboard.dismiss}>
					<ContainerModal>
						<Form ref={formRef} onSubmit={handleSubmit}>
							<IconButton
								onPress={() => setModalVisible(!modalVisible)}
								style={{ alignSelf: 'flex-end' }}
							>
								<AntDesign name="close" size={40} color="black" />
							</IconButton>
							<ModalTitle>
								Adicionar uma observação sobre está tecnologia
							</ModalTitle>
							<Input name="feature" label="Característica" />
							<Input name="description" label="Descrição" />
							<AddButton
								onPress={() => formRef.current.submitForm()}
								style={{ alignSelf: 'center' }}
							>
								<ButtonLabel>Adicionar feature</ButtonLabel>
							</AddButton>
						</Form>
					</ContainerModal>
				</KeyboardDismissContainer>
			</Modal>
		</>
	);
};
