import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';

class App extends Component {
	hotels = [
		{
			id: 1,
			name: 'Pod akacjami',
			city: 'Białystok',
			rating: '8.3',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			image: '',
		},
		{
			id: 2,
			name: 'Poniatowski',
			city: 'Suchowola',
			rating: '8.2',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			image: '',
		},
	];

	state = {
		hotels: [],
		loading: true,
	};

	// searchHandler(termDec){
	// 	console.log('szukaj z app', termDec)
	// 	const hotels = [...this.hotels]
	// 	.filter(x => x.name.toUpperCase().includes(termDec.toUpperCase()));
	// 	this.setState({hotels} )
	// }

	constructor(props) {
		super(props);
		console.log('komponent konstruktor');
	}

	searchHandler = (termDec) => {
		console.log('szukaj z app', termDec);
		const hotels = [...this.hotels].filter((x) =>
			x.name.toUpperCase().includes(termDec.toUpperCase())
		);
		this.setState({ hotels });
	};

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				hotels: this.hotels,
				loading: false,
			});
		}, 1000);
		console.log('component zamontowany');

		setTimeout(() => {
			this.setState({
				hotels: this.hotels,
				loading: true,
			});
		}, 3000);
	}

	componentDidUpdate() {
		console.log('Komponent zaktualizowany');
	}

	render() {
		console.log('komponent wyrenderowany');
		return (
			<div className="App">
				{/* <Header onSearch={(termUse) => this.searchHandler(termUse)} /> */}
				<Header onSearch={this.searchHandler} />
				<Menu />
				{this.state.loading ? (
					<p>Ładowanie danych...</p>
				) : (
					<Hotels hotels={this.state.hotels} />
				)}
			</div>
		);
	}
}

export default App;
