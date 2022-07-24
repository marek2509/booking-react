import { useContext, useDebugValue } from 'react';
import AuthContext from '../context/authContext';

export default function useAuth() {
	const authContext = useContext(AuthContext);

	const auth = authContext.isAuthenticated;

	// zmienia informacje pokazywaną w dev-tool
	useDebugValue(auth ? 'Zalogowany' : 'Wylogowany');

	const setAuth = (isAuthenticated, tokenData = null) => {
		if (isAuthenticated) {
			authContext.login();

			if (tokenData) {
				window.localStorage.setItem('token-data', JSON.stringify(tokenData));
			}
		} else {
			authContext.logout();
 
			window.localStorage.removeItem('token-data', JSON.stringify(tokenData));
		}
	};

	return [auth, setAuth];
}
