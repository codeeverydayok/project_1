import React, { createContext, useContext, useState} from 'react';

const StateContext = createContext();

// Default values
const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
}

export const ContextProvider = ({ children }) => {
	const [screenSize, setScreenSize] = useState(undefined);
	const [currentColor, setCurrentColor] = useState('#03C9D7');
	const [currentMode, setCurrentMode] = useState('Light');
	const [themeSettings, setThemeSettings] = useState(false);
	const [activeMenu, setActiveMenu] = useState (true);
	const [isClicked, setIsClicked] = useState(initialState);

	// Dark or Light mode on click
	const setMode = (e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem('themeMode', e.target.value);
		setThemeSettings(false); {/* close the panel */}
	};

	// Change color scheme
	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem('colorMode', color);
		setThemeSettings(false); {/* close the panel */}
	};

	const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
				currentColor,
				currentMode,	// Dark or Light mode
				themeSettings,
				setThemeSettings,
				setCurrentColor,
				setCurrentMode,
				setMode,
				setColor,
				initialState
			}}
		>
			{children}
		</StateContext.Provider>
	)
}

export const useStateContext = () => useContext (StateContext);