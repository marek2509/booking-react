import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hotel from './Hotel/Hotel';
import styles from './Hotels.module.css';
// import ThemeContext from '../../context/themeContext';

const propTypes = {
	hotels: PropTypes.array.isRequired,
};

class Hotels extends Component {
	// static contextType = ThemeContext;
	render() {
		return (
			<div className={styles.container}>
				<h2 className={styles.title}>Oferty:</h2>

				{this.props.hotels.map((hotel) => (
					<Hotel key={hotel.id} {...hotel} />
					// <Hotel key={hotel.id} {...hotel} theme={this.context} />
				))}
			</div>
		);
	}
}

Hotels.propTypes = propTypes;

export default Hotels;
