import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../../axios';
import { ObjectToArrayWithId } from '../../../helpers/objects';
import useAuth from '../../../hooks/useAuth';

const MyHotels = () => {
	const [hotels, setHotels] = useState([]);
	const [auth] = useAuth();

	const deleteHandler = async (id) => {
		try {
			const res = await axios.delete(`/hotels/${id}.json`);
			console.log(res);
			const afterRemoved = hotels.filter((h) => h.id !== id);
			setHotels(afterRemoved);
		} catch (error) {
			console.log(error.response)
		}
	};

	const fetchHotels = async () => {
		try {
			const res = await axios.get('/hotels.json');
			const newHotels = ObjectToArrayWithId(res.data).filter(
				(hotel) => hotel.user_id === auth.userId
			);
			setHotels(newHotels);
			console.log(newHotels);
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
									<button
										onClick={() => deleteHandler(hotel.id)}
										className="ml-5 btn btn-danger"
									>
										Usuń
									</button>
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
