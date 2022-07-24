import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://identitytoolkit.googleapis.com/v1',
	params: {
		key: 'AIzaSyC-n5djxzgUrGVEDCi-mfwKPC5jfmpnuIY',
	},
});

export default instance;
