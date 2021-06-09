import { createContext } from 'react';
import { Connection } from 'typeorm';

interface IDatabaseConnectionContext {
	connection: Connection;
}

export const DatabaseConnectionContext =
	createContext<IDatabaseConnectionContext>({} as IDatabaseConnectionContext);
