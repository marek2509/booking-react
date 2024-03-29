import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Hotel.module.css';
import hotelImg from '../../../assets/images/hotel.jpg';
import ThemeContext from '../../../context/themeContext';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const propTypes = {
	name: PropTypes.string.isRequired,
	city: PropTypes.string.isRequired,
	rating: PropTypes.number,
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
	const theme = useContext(ThemeContext);
	const [auth] = useAuth();

	const clickHandler = (e) => {
		// e.preventDefault();
		if (props.onOpen) {
			props.onOpen(props);
		}
	};
	return (
		<div className={`card  ${styles.hotel}`}>
			<div className="card-body">
				<div className="row">
					<div className="col-4">
						<img src={`https://placeimg.com/220/18${Math.floor(Math.random()*10)}/arch`} alt="" className="img-fluid img-thumbnail" />
					</div>
					<div className="col-8">
						<div className="row">
							<div className="col">
								<p className={styles.title}>{props.name}</p>
								<p className={styles.city}>{props.city}</p>
							</div>
							<div className={`col ${styles.containerRating}`}>
								<h5>Ocena: {props.rating == null ? 0 : props.rating}</h5>
								<Link
									to={`/hotele/${props.id}`}
									onClick={clickHandler}
									className={`btn btn-${theme.color} mt-2 px-5`}
								>
									Pokaż
								</Link>
							</div>
						</div>
					</div>

					<div className={`col-12 ${styles.contDesc}`}>
						<p>{props.description}</p>
						{auth ? (
							<p className="mt-2">Dostępność: {props.rooms} pokoje</p>
						) : (
							<p className="mt-2">Zaloguj</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

Hotel.propTypes = propTypes;
// Hotel.defaultProps = defaultProps;

export default Hotel;
