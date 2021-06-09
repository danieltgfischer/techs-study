import React, { FC } from 'react';
import { Container, Description, Name } from './styles';

interface ITechItem {
	name: string;
	description: string;
}

export const TechItem: FC<ITechItem> = ({ name, description }: ITechItem) => {
	return (
		<Container>
			<Name>{name}</Name>
			<Description>{description}</Description>
		</Container>
	);
};
