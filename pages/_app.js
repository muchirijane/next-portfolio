import { useState, useEffect } from 'react';
import Head from 'next/head'
import useDarkMode from 'use-dark-mode';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../components/Theme/Theme';
import '../styles/globals.css';
//  import "prismjs/themes/prism-tomorrow.css";

export default function MyApp({ Component, pageProps }) {
	const [ isMounted, setIsMounted ] = useState(false);
	const darkMode = useDarkMode(true);
	const theme = darkMode.value ? darkTheme : lightTheme;

	useEffect(() => {
		setIsMounted(true);
	}, []);
	return (
		<>
		<Head>
			 <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
					<meta name="author" content="Jane Muchiri" />
			<meta
				name="Keywords"
				content="front end developer, self taught developer, web developer, Html and CSS, portfolio, javascript, react"
			/>
			<meta
				name="description"
				content="I am a self taught front end developer, who enjoys coding cool websites and making them user friendly. User Expericence is important in what I design and code."
			/>
			<meta name="theme-color" content="#161616" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
			<link rel="manifest" href="/manifest.json" />
			<link rel="icon" href="/favicon.ico" />
			<link rel="canonical" href="https://jane.vercel.app/" />
			<title>Jane's Front-end Developer</title>
					
		</Head>
		<ThemeProvider theme={theme}>
			<GlobalStyles />

			{isMounted && <Component {...pageProps} />}
		</ThemeProvider>
		</>
	);
}
