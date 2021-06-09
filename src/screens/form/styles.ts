import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const flatListStyle = StyleSheet.create({
	content: { alignItems: 'center', width: '100%' },
});

export const Container = styled.SafeAreaView`
	display: flex;
	height: 100%;
	width: 100%;
	background-color: #fff;
	padding: 20px 0 0;
	align-items: center;
`;

export const Button = styled.TouchableOpacity`
	background-color: #2478fa;
	width: ${width * 0.5}px;
	padding: 10px 0;
	border-radius: 7px;
`;

export const ButtonLabel = styled.Text`
	color: #fff;
	font-size: 24px;
	text-align: center;
`;
