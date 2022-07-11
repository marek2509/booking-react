import React, { useEffect, useState } from 'react';
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

function App() {
	const [hotels, setHotels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [theme, setTheme] = useState('danger');
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const changeTheme = () => {
		const newTheme = theme === 'primary' ? 'danger' : 'primary';
		setTheme(newTheme);
	};

	const searchHandler = (termDec) => {
		console.log('szukaj z app', termDec);
		const hotelsFiltered = [...backendHotels].filter((x) =>
			x.name.toUpperCase().includes(termDec.toUpperCase())
		);
		setHotels(hotelsFiltered);
	};

	useEffect(() => {
		setTimeout(() => {
			setHotels(backendHotels);
			setLoading(false);
		}, 1000);
	}, []);

	const header = (
		<Header>
			<Searchbar onSearch={searchHandler} />
			<ThemeButton />
		</Header>
	);

	const menu = <Menu />;

	const content = loading ? <LoadingIcon /> : <Hotels hotels={hotels} />;
	const footer = <Footer />;

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated: isAuthenticated,
				login: () => setIsAuthenticated(true),
				logout: () => setIsAuthenticated(false),
			}}
		>
			<ThemeContext.Provider
				value={{
					color: theme,
					onChangeTheme: changeTheme,
				}}
			>
				<Layout header={header} menu={menu} content={content} footer={footer} />
			</ThemeContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
