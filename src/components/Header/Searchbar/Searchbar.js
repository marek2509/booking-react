import React, { useState } from 'react';
import styles from './Searchbar.module.css';

function Searchbar() {
	
	const [term, setTerm] = useState();
	
	const search = () => {
		console.log('Szukaj', term);
	};

	return (
		<div className="d-flex">
			<input
				value={term}
				onChange={(e) => setTerm(e.target.value)}
				className="form-control"
				type="text"
				placeholder="Szukaj..."
			/>
			<button onClick={search} className={`${styles.btnSearch} btn btn-secondary`}>
				Szukaj!
			</button>
		</div>
	);
}

export default Searchbar;
