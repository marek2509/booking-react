export const reducer = (state, action) => {
	switch (action.type) {
		case 'change-theme':
			const theme = state.theme === 'danger' ? 'primary' : 'danger';
			return { ...state, theme };
		case 'login':
			return {
				...state,
				isAuthenticated: true,
			};
		case 'logout':
			return {
				...state,
				isAuthenticated: false,
			};
		default:
			throw new Error('There is no such action: ' + action.type);
	}
};

const checkUser = () => {
	const tokenData = JSON.parse(window.localStorage.getItem('token-data'));

	if (tokenData) {
		return true;
	} else {
		return false;
	}
};

export const initialState = {
	isAuthenticated: checkUser(),
	theme: 'warning',
};
