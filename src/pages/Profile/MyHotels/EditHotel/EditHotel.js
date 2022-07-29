import React, { useEffect, useState } from 'react';
import axios from '../../../../axios';
import { useNavigate, useParams } from 'react-router-dom';
import HotelForm from '../HotelForm';
import useAuth from '../../../../hooks/useAuth';

const EditHotel = (props) => {
	const [auth] = useAuth();
	const navigate = useNavigate();
	const [hotel, setHotel] = useState(null);
	const id = useParams().id;

	const submit = async (form) => {
		 await axios.put(`hotels/${id}.json?auth=${auth.token}`, form);
		navigate('/profil/hotele');
	};

	const fetchHotel = async () => {
		try {
			const res = await axios.get(`hotels/${id}.json`);
			setHotel(res.data);
		} catch (error) {}
	};

	useEffect(() => {
		fetchHotel();
	}, []);

	return (
		<div className="card">
			<div className="card-header">Edytuj hotel</div>
			<div className="card-body">
				<p className="text-muted">Uzupełnij dane hotelu</p>
				<HotelForm hotel={hotel} buttonText="Zapisz!" onSubmit={submit} />
			</div>
		</div>
	);
};

export default EditHotel;
