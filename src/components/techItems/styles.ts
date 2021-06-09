import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.TouchableOpacity`
	display: flex;
	align-items: center;
	border: 1px solid #2478fa;
	background-color: #2478fa;
	height: 80px;
	width: ${width * 0.8}px;
	border-radius: 7px;
	margin: 5px 0;
`;

export const Name = styled.Text`
	color: #fff;
	font-size: 20px;
`;
export const Description = styled.Text`
	color: #fff;
	font-size: 16px;
`;
