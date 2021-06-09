import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	display: flex;
	height: 100%;
	width: 100%;
	background-color: #fff;
	padding: 20px 0 0;
`;

export const MenuContainer = styled.View`
	width: 100%;
	align-items: flex-end;
`;

export const TrashButton = styled.TouchableOpacity`
	margin: 0 15px 0 0;
`;

export const Description = styled.Text`
	font-size: 24px;
	text-align: center;
	font-style: italic;
`;
