import React from 'react';
import axios from '../../../../axios';
import { useNavigate } from 'react-router-dom';
import HotelForm from '../HotelForm';

const AddHotel = (props) => {
	const navigate = useNavigate();

	const submit = async (form) => {
		await axios.post('/hotels.json', form);
		navigate('/profil/hotele');
	};

	return (
		<div className="card">
			<div className="card-header">Dodaj hotel</div>
			<div className="card-body">
				<p className="text-muted">Uzupełnij dane hotelu</p>
				<HotelForm buttonText="Dodaj" onSubmit={submit} />
			</div>
		</div>
	);
};

export default AddHotel;
