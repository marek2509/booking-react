import React, { useCallback, useEffect, useReducer, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';
import ThemeButton from './components/UI/ThemeButton/ThemeButton';
import ThemeContext from './context/themeContext';
import AuthContext from './context/authContext';
import BestHotel from './components/Hotels/BestHotel/BestHotel';

const backendHotels = [
	{
		id: 1,
		name: 'Pod akacjami',
		city: 'Białystok',
		rating: 8.3,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		image: '',
	},
	{
		id: 2,
		name: 'Poniatowski',
		city: 'Suchowola',
		rating: 8.2,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		image: '',
	},
];

const reducer = (state, action) => {
	switch (action.type) {
		case 'change-theme':
			const theme = state.theme === 'danger' ? 'primary' : 'danger';
			return { ...state, theme };
		case 'set-loading':
			return { ...state, loading: action.loading };
		case 'set-hotels':
			return {
				...state,
				hotels: action.hotels,
			};
		case 'login':
			return {
				...state,
				isAuthenticated: true,
			};
		case 'logout':
			return {
				...state,
				isAuthenticated: false,
			};
		default:
			throw new Error('There is no such action: ' + action.type);
	}
};

const initialState = {
	hotels: [],
	loading: true,
	isAuthenticated: false,
	theme: 'warning',
};

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const searchHandler = (termDec) => {
		const newHotels = [...backendHotels].filter((x) =>
			x.name.toUpperCase().includes(termDec.toUpperCase())
		);
		// setHotels(hotelsFiltered);
		dispatch({ type: 'set-hotels', hotels: newHotels });
	};

	const getBestHotel = useCallback(
		(options) => {
			if (state.hotels.length < options.minHotels) {
				return null;
			} else {
				// return state.hotels.sort(h => h.rating).reverse()[0];
				return state.hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
			}
		},
		[state.hotels]
	);

	useEffect(() => {
		setTimeout(() => {
			// setHotels(backendHotels);
			// setLoading(false);
			dispatch({ type: 'set-hotels', hotels: backendHotels });
			dispatch({ type: 'set-loading', loading: false });
		}, 1000);
	}, []);

	const header = (
		<Header>
			<Searchbar onSearch={searchHandler} />
			<ThemeButton />
		</Header>
	);

	const menu = <Menu />;

	const content = state.loading ? (
		<LoadingIcon />
	) : (
		<>
			<BestHotel getHotel={getBestHotel} />
			<Hotels hotels={state.hotels} />
		</>
	);
	const footer = <Footer />;

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: state.isAuthenticated,
				login: () => dispatch({ type: 'login' }),
				logout: () => dispatch({ type: 'logout' }),
			}}
		>
			<ThemeContext.Provider
				value={{
					color: state.theme,
					onChangeTheme: () => dispatch({ type: 'change-theme' }),
				}}
			>
				<Layout header={header} menu={menu} content={content} footer={footer} />
			</ThemeContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
