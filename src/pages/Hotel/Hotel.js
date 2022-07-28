import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import axios from '../../axios';
import { ObjectToArrayWithId } from '../../helpers/objects';
const Hotel = (props) => {
	const { id } = useParams();
	const [hotel, setHotel] = useState(null);
	const [loading, setLoading] = useState(true);
	const setTitle = useWebsiteTitle();

	const fetchHotel = async () => {
		const res = await axios.get(`/hotels/${id}.json`);
		setHotel(res.data);
		setLoading(false);
	};

	useEffect(() => {
		fetchHotel();
	}, []);

	useEffect(() => {
		if (hotel != null) {
			setTitle(hotel.name);
		}
	}, [hotel]);

	console.log(hotel);
	return loading ? <LoadingIcon /> : <h1>hotel: {hotel.name} </h1>;
};

export default Hotel;
