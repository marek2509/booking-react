import React from 'react';

const ThemeContext = React.createContext({
	color: 'primary',
	onChangeTheme: () => {},
});

ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
