import React, { useEffect, useState } from 'react';
import LastHotel from '../../components/Hotels/LastHotel/LastHotel';
import useStateStorage from '../../hooks/useStateStorage';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import BestHotel from '../../components/Hotels/BestHotel/BestHotel';
import Hotels from '../../components/Hotels/Hotels';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';
import axios from '../../axios';
import { ObjectToArrayWithId } from '../../helpers/objects';

const Home = (props) => {
	useWebsiteTitle('Strona główna');
	const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);
	const [loading, setLoading] = useState(true);
	const [hotels, setHotels] = useState([{}]);

	const getBestHotel = () => {
		if (hotels.length < 2) {
			return null;
		} else {
			// return hotels.sort(h => h.rating).reverse()[0];
			return hotels.sort((a, b) => (a.rating > b.rating ? -1 : 1))[0];
		}
	};

	const openHotel = (hotel) => setLastHotel(hotel);
	const removeLastHotel = () => setLastHotel(null);
	const fetchHotels = async () => {
		try {
			const res = await axios.get('/hotels.json');
			const newHotel = ObjectToArrayWithId(res.data).filter(
				(hotel) => hotel.status == 1);
			console.log(newHotel);
			setHotels(newHotel);
			setLoading(false);
		} catch (ex) {
			console.log(ex.response);
		}
	};

	useEffect(() => {
		fetchHotels();
	}, []);

	return loading ? (
		<LoadingIcon />
	) : (
		<>
			{lastHotel ? (
				<LastHotel {...lastHotel} onRemove={removeLastHotel} />
			) : null}
			{getBestHotel() ? <BestHotel getHotel={getBestHotel} /> : null}
			<Hotels onOpen={openHotel} hotels={hotels} />
		</>
	);
};

export default Home;
