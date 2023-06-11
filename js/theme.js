const Themes = {
	stockLight: {
		appBackground: '#E4D0BC',
		foregroundHigh: '#000000',
		foregroundMed: '#000000e6',
		foregroundLow: '#00000080',
		backgroundHigh: '#E9DACC',
		backgroundMed: '#1D1D1F',
		backgroundLow: ' #000000',
		toneForeground: '#E9DACC',
		toneBackground: '#0000001a',
	},
	stockDark: {
		appBackground: '#000010',
		foregroundHigh: '#ECE7DA',
		foregroundMed: '#ECE7DAe6',
		foregroundLow: '#ECE7DA80',
		backgroundHigh: '#161616',
		backgroundMed: '#1D1D1F',
		backgroundLow: ' #000000',
		toneForeground: '#ECE7DA',
		toneBackground: '#ffffff26',
	},
};

window.applyColourTheme = function (themeName) {
	document.documentElement.style.setProperty('--a-b', Themes[themeName].appBackground);
	document.documentElement.style.setProperty('--f-h', Themes[themeName].foregroundHigh);
	document.documentElement.style.setProperty('--f-m', Themes[themeName].foregroundMed);
	document.documentElement.style.setProperty('--f-l', Themes[themeName].foregroundLow);
	document.documentElement.style.setProperty('--b-h', Themes[themeName].backgroundHigh);
	document.documentElement.style.setProperty('--b-m', Themes[themeName].backgroundMed);
	document.documentElement.style.setProperty('--b-l', Themes[themeName].backgroundLow);
	document.documentElement.style.setProperty('--t-f', Themes[themeName].toneForeground);
	document.documentElement.style.setProperty('--t-b', Themes[themeName].toneBackground);
};

applyColourTheme('stockLight');
