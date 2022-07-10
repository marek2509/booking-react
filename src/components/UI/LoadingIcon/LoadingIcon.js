import React from 'react';
import ThemeContext from '../../../context/themeContext';

export default function LoadingIcon(props) {
	return (
		<ThemeContext.Consumer>
			{(value) => (
				<div className="d-flex justify-content-center">
					<div className={`spinner-border m-5 text-${value}`} role="status">
						{/* <span className="sr-only">Ładowanie...</span> */}
					</div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
}
