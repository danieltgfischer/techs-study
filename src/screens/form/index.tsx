import React, { useContext, useRef, useCallback } from 'react';
import { Form as UnForm } from '@unform/mobile';
import { DatabaseConnectionContext } from '@/contexts/databaseConnection';
import { Input } from '@/components/input';
import { FormHandles, SubmitHandler } from '@unform/core';
import { TechStudy } from '@/database/entities/Study';
import { Container, Button, ButtonLabel } from './styles';

interface IData {
	name: string;
	description: string;
}

export const Form: React.FC = () => {
	const { connection } = useContext(DatabaseConnectionContext);
	const formRef = useRef<FormHandles>(null);

	const handleSubmit: SubmitHandler<IData> = useCallback(
		async ({ name, description }: IData) => {
			try {
				const tech = new TechStudy();
				tech.name = name;
				tech.description = description;
				await connection.manager.save(tech);
				formRef.current.reset();
			} catch (error) {
				console.error(error);
			}
		},
		[connection.manager],
	);

	return (
		<Container>
			<UnForm ref={formRef} onSubmit={handleSubmit}>
				<Input name="name" label="Nome" />
				<Input name="description" label="Descrição" />
			</UnForm>
			<Button onPress={() => formRef.current.submitForm()}>
				<ButtonLabel>Adicionar</ButtonLabel>
			</Button>
		</Container>
	);
};
