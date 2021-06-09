import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';

const { height } = Dimensions.get('window');

export const flatListStyle = StyleSheet.create({
	content: { alignItems: 'center', width: '100%' },
});

export const FlatList = styled.FlatList``;

export const Container = styled.SafeAreaView`
	display: flex;
	align-items: center;
	height: 100%;
	width: 100%;
	background-color: #fff;
	padding: 20px 0 0;
`;

export const MenuContainer = styled.View`
	width: 100%;
	align-items: flex-end;
`;

export const IconButton = styled.TouchableOpacity`
	margin: 0 15px 0 0;
`;

export const Description = styled.Text`
	font-size: 24px;
	text-align: center;
	font-style: italic;
`;

export const AddButton = styled.TouchableOpacity`
	background-color: #2478fa;
	width: 50%;
	border-radius: 7px;
	padding: 5px 10px;
	margin: 15px 0;
`;

export const ButtonLabel = styled.Text`
	color: #fff;
	font-size: 24px;
`;

export const ContainerModal = styled.View`
	align-items: center;
	background-color: #fff;
	height: ${height}px;
	padding: 30px 0 0;
`;

export const KeyboardDismissContainer = styled.TouchableWithoutFeedback``;

export const ModalTitle = styled.Text`
	font-size: 24px;
	text-align: center;
	padding: 0 10%;
`;
