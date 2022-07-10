import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

const propTypes = {
	onSearch: PropTypes.func.isRequired,
};

function Searchbar(props) {
	const [term, setTerm] = useState('');

	const search = () => {
		props.onSearch(term);
	};

	const onKeyDownHandler = (e) => {
		if (e.key === 'Enter') {
			search();
		}
	};

	return (
		<div className="d-flex">
			<input
				value={term}
				onKeyDown={onKeyDownHandler}
				onChange={(e) => setTerm(e.target.value)}
				className="form-control"
				type="text"
				placeholder="Szukaj..."
			/>
			<button
				onClick={search}
				className={`${styles.btnSearch} btn btn-secondary`}
			>
				Szukaj!
			</button>
		</div>
	);
}

Searchbar.propTypes = propTypes;

export default Searchbar;
