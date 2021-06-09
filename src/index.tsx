import 'reflect-metadata';
import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Connection, createConnection } from 'typeorm';
import { ActivityIndicator } from 'react-native';
import { TechStudy } from './database/entities/Study';
import { Feature } from './database/entities/Feature';
import { DatabaseConnectionContext } from './contexts/databaseConnection';
import { Home } from './screens/home';
import { Form } from './screens/form';
import { Study } from './screens/study';

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
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{
						headerTitleAlign: 'center',
						headerTintColor: '#f54d3e',
					}}
				>
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen
						name="Adicionar_Tech"
						options={() => ({ title: 'Adicionar Estudo' })}
						component={Form}
					/>
					<Stack.Screen
						name="Study"
						options={({ route }: any) => ({
							title: route.params?.name || '',
						})}
						component={Study}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</DatabaseConnectionContext.Provider>
	);
};

export default App;
