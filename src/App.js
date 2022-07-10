import React, { Component } from 'react';
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

class App extends Component {
	static contextType = ThemeContext;
	hotels = [
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

	state = {
		hotels: [],
		loading: true,
		theme: 'danger',
	};

	// searchHandler(termDec){
	// 	console.log('szukaj z app', termDec)
	// 	const hotels = [...this.hotels]
	// 	.filter(x => x.name.toUpperCase().includes(termDec.toUpperCase()));
	// 	this.setState({hotels} )
	// }

	searchHandler = (termDec) => {
		console.log('szukaj z app', termDec);
		const hotels = [...this.hotels].filter((x) =>
			x.name.toUpperCase().includes(termDec.toUpperCase())
		);
		this.setState({ hotels });
	};

	changeTheme() {
		const newTheme = this.state.theme === 'primary' ? 'danger' : 'primary';
		this.setState({ theme: newTheme });
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				hotels: this.hotels,
				loading: false,
			});
		}, 1000);
	}

	render() {
		const header = (
			<Header>
				<Searchbar onSearch={this.searchHandler} />
				<ThemeButton onChange={() => this.changeTheme()} />
			</Header>
		);

		const menu = <Menu />;

		const content = this.state.loading ? (
			<LoadingIcon />
		) : (
			<Hotels hotels={this.state.hotels} />
		);

		const footer = <Footer />;

		return (
			<ThemeContext.Provider value="warning">
				{/* <Header onSearch={(termUse) => this.searchHandler(termUse)} /> */}
				<Layout 
					header={header} 
					menu={menu} 
					content={content} 
					footer={footer} 
				/>
			</ThemeContext.Provider>
		);
	}
}

export default App;
