import React, { useEffect, useState } from 'react';
import moment from 'moment';

const BestHotel = (props) => {
	const [time, setTime] = useState('');

	const hotel = props.getHotel({ minHotels: 2 });
	const endTime = moment().add(22, 'minutes').add(5, 'seconds');
	let interval = null;
	
	useEffect(() => {
		interval = setInterval(() => {
			const leftTime = -moment().diff(endTime) / 1000;
			const minutes = Math.floor(leftTime / 60);
			const seconds = Math.floor(leftTime % 60);
			setTime(`minut ${minutes} sekund: ${seconds}`);
			console.log(leftTime);
		}, 1000);

		//return working the same as componentWillUnmount() in class component;
		return () => {
			console.log('unmounted');
			clearInterval(interval);
		};
	}, []);

	if (!hotel) {
		return null;
	}

	return (
		<div className="card bg-success text-white">
			<h6 className="card-header">Najlepsza oferta!</h6>
			<div className="card-body">
				<div className="d-flex justify-content-between">
					<h5 className="card-title">{hotel.name}</h5>
					<p>Ocena: {hotel.rating}</p>
				</div>
				<p>Do końca oferty pozostało: {time}</p>
				<a href="#" className="btn btn-sm btn-light">
					Pokaż
				</a>
			</div>
		</div>
	);
};

export default BestHotel;
