import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Description, Name } from './styles';

interface ITechItem {
	name: string;
	description: string;
	id: number;
}

export const TechItem: FC<ITechItem> = ({
	name,
	description,
	id,
}: ITechItem) => {
	const navigation = useNavigation();
	return (
		<Container onPress={() => navigation.navigate('Study', { name, id })}>
			<Name>{name}</Name>
			<Description>{description}</Description>
		</Container>
	);
};
