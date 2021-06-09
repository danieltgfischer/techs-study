import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
	display: flex;
	width: ${width}px;
	margin: 0 0 0 25px;
`;

export const Label = styled.Text`
	font-size: 20px;
`;

export const TextInput = styled.TextInput`
	height: 100%;
	font-size: 20px;
	color: #2478fa;
`;

export const TextInputContainer = styled.View`
	display: flex;
	width: 80%;
	height: 40px;
	border: 1px solid #2478fa;
	margin: 10px 0 15px;
`;
