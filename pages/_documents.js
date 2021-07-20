import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en-us">
				<Head>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Nunito:wght@300;400;800;900&display=swap"
						rel="stylesheet"
					/>

					<meta property="og:type" content="website" />
					<meta property="og:title" content="Jane | Front-end developer" />
					<meta
						property="og:description"
						content="I am a self taught front end developer, who enjoys coding cool websites and making them user friendly. User Expericence is important in what I design and code."
					/>
					<meta property="og:site_name" content="Jane Portfolio App" />
					<meta property="og:url" content="https://jane.vercel.app/" />
					<meta property="og:image" content="https://jane.vercel.app/public/icons/sharp-image.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
