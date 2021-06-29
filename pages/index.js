import Head from 'next/head';
import Home from './home';

import Layout from '../components/layout/Layout';

export default function Index() {
	return (
		<Layout>
			<Head>
				<title>Jane's Front-end Developer</title>
			</Head>

			<>
				<Home />
				
			</>
		</Layout>
	);
}
