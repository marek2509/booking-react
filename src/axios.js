import axios from 'axios';

const instance = axios.create({
	baseURL:
		'https://react-hotels-6b5b6-default-rtdb.europe-west1.firebasedatabase.app',
});

export default instance;
