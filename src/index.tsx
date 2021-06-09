import 'reflect-metadata';
import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Connection, createConnection } from 'typeorm';
import { ActivityIndicator } from 'react-native';
import { Home } from './screens/home';
import { TechStudy } from './database/entities/Study';
import { Feature } from './database/entities/Feature';
import { DatabaseConnectionContext } from './contexts/databaseConnection';

const Stack = createStackNavigator();

const App: React.FC = () => {
	const [connection, setConnection] = useState<Connection | null>(null);

	const connect = useCallback(async () => {
		const createdConnection = await createConnection({
			type: 'expo',
			database: 'techs',
			driver: require('expo-sqlite'),
			entities: [TechStudy, Feature],
			synchronize: true,
		});

		setConnection(createdConnection);
	}, []);

	useEffect(() => {
		if (!connection) {
			connect();
		}
	}, [connect, connection]);

	if (!connection) {
		return <ActivityIndicator />;
	}

	return (
		<DatabaseConnectionContext.Provider value={{ connection }}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</DatabaseConnectionContext.Provider>
	);
};

export default App;
