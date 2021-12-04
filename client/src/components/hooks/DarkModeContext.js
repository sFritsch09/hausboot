import React, { useContext, useState } from 'react';

const DarkModeContext = React.createContext();
const DarkModeUpdateContext = React.createContext();

export const useDarkMode = () => {
	return useContext(DarkModeContext);
};

export const useDarkModeUpdate = () => {
	return useContext(DarkModeUpdateContext);
};

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('theme')));
	const toggleDarkMode = () => {
		setIsDarkMode((prevTheme) => !prevTheme);
	};

	return (
		<DarkModeContext.Provider value={isDarkMode}>
			<DarkModeUpdateContext.Provider value={toggleDarkMode}>
				{children}
			</DarkModeUpdateContext.Provider>
		</DarkModeContext.Provider>
	);
};
