import { useContext, useDebugValue } from 'react';
import AuthContext from '../context/authContext';

export default function useAuth() {
	const authContext = useContext(AuthContext);

	const auth = authContext.user;

	// zmienia informacje pokazywaną w dev-tool
	useDebugValue(auth ? 'Zalogowany' : 'Wylogowany');

	const setAuth = (user) => {
		if (user) {
			authContext.login(user);
			window.localStorage.setItem('token-data', JSON.stringify(user));
		} else {
			authContext.logout();

			window.localStorage.removeItem('token-data', JSON.stringify(user));
		}
	};

	return [auth, setAuth];
}
