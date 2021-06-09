import React, { FC } from 'react';
import { Container, Description, Name } from './styles';

interface ITechItem {
	feature: string;
	description: string;
	featureId: number;
}

export const FeatureItem: FC<ITechItem> = ({
	feature,
	description,
	featureId,
}: ITechItem) => {
	return (
		<Container onPress={() => console.log(feature)}>
			<Name>{feature}</Name>
			<Description>{description}</Description>
		</Container>
	);
};
