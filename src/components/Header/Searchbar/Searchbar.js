import React from 'react';

function Searchbar() {
	return (
		<div className="d-flex">
				<input
					className="form-control"
					// style={{
					// 	width: '100% -20px',
					// }}
					type="text"
					placeholder="Szukaj"
				/>
			<button className="btn btn-primary">Szukaj!</button>
		</div>
	);
}

export default Searchbar;
