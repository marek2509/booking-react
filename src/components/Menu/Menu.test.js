import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './Menu';
import AuthContext from '../../context/authContext';

describe('Menu component', () => {
	test('renders Zaloguj if user is null', () => {
		render(
			<AuthContext.Provider
				value={{
					user: false,
					login: () => {},
					logout: () => {},
				}}
			>
				<Router>
					<Menu />
				</Router>
			</AuthContext.Provider>
		);
		const link = screen.getByText(/zaloguj/i);

		expect(link).toBeInTheDocument();
	});

	test('renders wyloguj if user exist', () => {
		render(
			<Router>
				<Menu />
			</Router>
		);
		const link = screen.getByText(/wyloguj/i);

		expect(link).toBeInTheDocument();
	});
});
