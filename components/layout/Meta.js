import Head from 'next/head';
export default function Meta() {
	return (
		<Head>
			<meta name="author" content="Jane Muchiri" />
			<meta
				name="Keywords"
				content="front end developer, web developer, developer, portfolio, javascript, react"
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
			<link rel="manifest" href="/favicon/site.webmanifest" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}
