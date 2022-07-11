import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';
import ThemeContext from '../../../context/themeContext';

const propTypes = {
	onSearch: PropTypes.func.isRequired,
};

function Searchbar(props) {
	const [term, setTerm] = useState('');
	const theme = useContext(ThemeContext);

	const search = () => {
		props.onSearch(term);
	};

	const onKeyDownHandler = (e) => {
		if (e.key === 'Enter') {
			search();
		}
	};


	// działa jak componentDidMount()
	// oraz jak componentDidUpdate()
	//gdy zostanie zmieniona wartość którą śledzi w parametrze
	// lub gdy brak wartości to gdy zmieni się cokolwiek w całym komponencie
	const focusInput = () => {
		const input = document.querySelector('.search');
		console.log(input.focus());
	}
	useEffect(() => { 
		focusInput();
	},
	[]);

	return (
		<div className="d-flex">
			<input
				value={term}
				onKeyDown={onKeyDownHandler}
				onChange={(e) => setTerm(e.target.value)}
				className="form-control search"
				type="text"
				placeholder="Szukaj..."
			/>

			<button
				onClick={search}
				className={`${styles.btnSearch} btn btn-${theme.color}`}
			>
				Szukaj!
			</button>
		</div>
	);
}

Searchbar.propTypes = propTypes;

export default Searchbar;
