import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';
import ThemeContext from '../../../context/themeContext';

const propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	description: PropTypes.string.isRequired,
	// exampleObject: PropTypes.shape({
	// 	id: PropTypes.number.isRequired,
	// 	name: PropTypes.string.isRequired,
	// })
	// missing: PropTypes.string,
};

// const defaultProps ={
// 	missing: "domyslny tekst",
// }

function Hotel(props) {
	return (
		<div className={`card  ${styles.hotel}`}>
			<div className="card-body">
				<div className="row">
					<div className="col-4">
						<img src={hotelImg} alt="" className="img-fluid img-thumbnail" />
					</div>
					<div className="col-8">
						<div className="row">
							<div className="col">
								<p className={styles.title}>{props.name}</p>
								<p className={styles.city}>{props.city}</p>
							</div>
							<div className={`col ${styles.containerRating}`}>
								<h5>Ocena: {props.rating}</h5>
								<ThemeContext>
									{(value) => (
										<a href="#" className={`btn btn-${value} mt-2 px-5`}>
											Pokaż
										</a>
									)}
								</ThemeContext>
							</div>
						</div>
					</div>

					<div className={`col-12 ${styles.contDesc}`}>
						<p>{props.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

Hotel.propTypes = propTypes;
// Hotel.defaultProps = defaultProps;

export default Hotel;
