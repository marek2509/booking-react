import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import axios from '../../axios';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Hotel = (props) => {
	const navigate = useNavigate();
	const { id } = useParams();
	const [auth] = useAuth();
	const [hotel, setHotel] = useState(null);
	const [rating, setRating] = useState(5);
	const [loading, setLoading] = useState(true);
	const setTitle = useWebsiteTitle();

	const fetchHotel = async () => {
		const res = await axios.get(`/hotels/${id}.json`);
		setHotel(res.data);
		setLoading(false);
	};

	const rateHotel = async () => {
		try {
			const res = await axios.put(`/hotels/${id}/rating.json?auth=${auth.token}`, rating);
			navigate('/');
		} catch (ex) {
			console.log(ex.response);
		}
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
	return loading ? (
		<LoadingIcon />
	) : (
		<div className="card">
			<div className="card-header">
				<h1>Holet: {hotel.name}</h1>
			</div>
			<div className="card-body">
				<img
					src={`https://placeimg.com/420/180/arch`}
					className="img-fluid img-thumbnail mb-4"
				/>
				<p>
					Miejscowość: <b>{hotel.city}</b>
				</p>
				<p>
					Pokoje: <b>{hotel.rooms}</b>
				</p>
				<p className="lead">{hotel.description}</p>
				<p>Wyposażenie</p>
				<ul>
					{hotel.features.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
				<h4>Ocena: {hotel.rating == null ? 'brak ocen' : hotel.rating}</h4>
			</div>

			<div className="card-footer">
				{auth ? (
					<div className="form-group row mt-4">
						<div className="col">
							<select
								value={rating}
								onChange={(e) => setRating(e.target.value)}
								className="form-control form-select-lg mb-3"
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
							</select>
						</div>
						<div className="col">
							<button className="btn btn-info" onClick={rateHotel}>
								Oceń
							</button>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
};

export default Hotel;
