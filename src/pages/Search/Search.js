import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ObjectToArrayWithId } from '../../helpers/objects';
import axios from '../../axios';
import Hotels from '../../components/Hotels/Hotels';

const Search = () => {
	const { term } = useParams();
	const [hotels, setHotels] = useState([]);

	const search = async () => {
		try {
			const res = await axios.get('/hotels.json');
			const newHotel = ObjectToArrayWithId(res.data).filter((hotel) =>
				hotel.name.includes(term)
			);

			setHotels(newHotel);
			// setLoading(false);
		} catch (ex) {
			console.log(ex.response);
		}
	};

	useEffect(() => {
		search();
	}, [term]);
	return (
		<div>
			<h2>Wyniki dla frazy "{term}"</h2>
			<Hotels hotels={hotels} />
		</div>
	);
};

export default Search;
