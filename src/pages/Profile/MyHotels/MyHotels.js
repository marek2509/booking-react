import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../axios';
import { ObjectToArrayWithId } from '../../../helpers/objects';
const MyHotels = () => {
	const [hotels, setHotels] = useState([]);

	const fetchHotels = async () => {
		try {
			const res = await axios.get('/hotels.json');
			const newHotel = ObjectToArrayWithId(res.data);
			setHotels(newHotel);
		} catch (ex) {
			console.log(ex.response);
		}
	};

	useEffect(() => {
		fetchHotels();
	}, []);

	return (
		<div>
			{hotels ? (
				<table className="table">
					<thead>
						<tr>
							<th>Nazwa</th>
							<th>Opcja</th>
						</tr>
					</thead>
					<tbody>
						{hotels.map((hotel) => (
							<tr key={hotel.id}>
								<td>{hotel.name}</td>
								<td>
									<button className="btn btn-warning">Edytuj</button>
									<button className="ml-5 btn btn-danger">Usuń</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>Nie masz jeszcze żadnego hotelu</p>
			)}
			<Link to="dodaj" className="btn btn-primary">
				Dodaj hotel
			</Link>
		</div>
	);
};

export default MyHotels;
