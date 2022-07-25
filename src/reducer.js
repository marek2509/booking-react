export const reducer = (state, action) => {
	switch (action.type) {
		case 'change-theme':
			const theme = state.theme === 'danger' ? 'primary' : 'danger';
			return { ...state, theme };
		case 'login':
			console.log(action.user, action.testToDelete)
			return {
				...state,
				user: action.user,
			};
		case 'logout':
			return {
				...state,
				user: false,
			};
		default:
			throw new Error('There is no such action: ' + action.type);
	}
};

export const initialState = {
	user: JSON.parse(window.localStorage.getItem('token-data')),
	theme: 'danger',
};
