import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const flatListStyle = StyleSheet.create({
	content: { alignItems: 'center', width: '100%' },
});

export const Container = styled.SafeAreaView`
	display: flex;
	height: 100%;
	width: 100%;
	background-color: #fff;
	padding: 20px 0 0;
`;

export const FlatList = styled.FlatList``;

export const Title = styled.Text`
	color: #f54d3e;
	font-size: 24px;
	text-align: center;
`;

export const Button = styled.TouchableOpacity`
	background-color: #f54d3e;
`;

export const ButtonLabel = styled.Text`
	color: #fff;
	font-size: 24px;
	text-align: center;
`;
