import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
	display: flex;
	align-items: center;
	border: 1px solid #2478fa;
	background-color: #fff;
	height: 150px;
	width: ${width * 0.95}px;
	border-radius: 7px;
	margin: 5px 0;
`;

export const Name = styled.Text`
	color: #2478fa;
	font-size: 24px;
	margin: 0 0 25px;
	font-weight: bold;
`;
export const Description = styled.Text`
	color: #2478fa;
	font-size: 20px;
`;
