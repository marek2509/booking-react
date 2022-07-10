import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Hotels from './components/Hotels/Hotels';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';
import Searchbar from './components/UI/Searchbar/Searchbar';
import Layout from './components/Layout/Layout';
import Footer from './components/Footer/Footer';

class App extends Component {
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
		term: '',
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

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				hotels: this.hotels,
				loading: false,
			});
		}, 1000);
		console.log('component zamontowany');
	}

	render() {
		console.log('komponent wyrenderowany');
		return (
			<div className="App">
				{/* <Header onSearch={(termUse) => this.searchHandler(termUse)} /> */}

				<Layout 
					header={		
						<Header>
							<Searchbar onSearch={this.searchHandler} />
						</Header>
					}
					menu={<Menu />}
					content={this.state.loading ? (
						<LoadingIcon />
					) : (
						<Hotels hotels={this.state.hotels} />
					)}
					footer={
						<Footer />
					}
				/>
		
			
				
			</div>
		);
	}
}

export default App;
