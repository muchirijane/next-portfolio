import { useState, useEffect } from 'react';
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../components/Theme/Theme';
import '../styles/globals.css';
//  import "prismjs/themes/prism-tomorrow.css";

function MyApp({ Component, pageProps }) {
	const [ isMounted, setIsMounted ] = useState(false);
	const darkMode = useDarkMode(true);
	const theme = darkMode.value ? darkTheme : lightTheme;

	useEffect(() => {
		setIsMounted(true);
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />

			{isMounted && <Component {...pageProps} />}
		</ThemeProvider>
	);
}

export default MyApp;
