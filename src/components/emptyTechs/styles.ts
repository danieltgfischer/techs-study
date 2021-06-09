import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
	display: flex;
	align-items: center;
	background-color: #2478fa;
	align-items: center;
	justify-content: center;
	height: ${height * 0.4}px;
	width: ${width * 0.8}px;
	border-radius: 7px;
	margin: 5px 0;
`;

export const Title = styled.Text`
	color: #fff;
	font-size: 24px;
	text-align: center;
`;
