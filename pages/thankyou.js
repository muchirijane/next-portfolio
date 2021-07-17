import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useWindowSize from 'react-use/lib/useWindowSize';
import Image from 'next/image';
import Link from 'next/link';

import Confetti from 'react-confetti';
import Layout from '../components/layout/Layout';
import hand from '../public/hand.svg';
import { Container, Content, BlogLink, PageLink } from '../styles/Thankyou.styles';

export default function thankyou() {
	const { width, height } = useWindowSize();
	const router = useRouter();
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		router.push('/');
	// 	}, 8000);
	// }, []);
	return (
		<Layout>
			<Container>
				<Image src={hand} height={500} width={800} alt="A 3D hand writing something" />
				<Content>
					<h1>Thank you!!!</h1>
					<p>
						I will responsed to your email soon, take a look at the
						<Link href="/blog">
							<BlogLink className="link-animated">blog section </BlogLink>
						</Link>
						to read something new about web development.
					</p>
					<Link href="/">
						<PageLink className="link">Go back Home</PageLink>
					</Link>
				</Content>
			</Container>
			<Confetti
				width={width}
				height={height}
				numberOfPieces={300}
				confettiSource={{ x: width, y: height, h: 20, w: 30 }}
				friction={1}
				gravity={0.09}
				initialVelocityX={{ min: -24, max: 24 }}
				initialVelocityY={{ min: -10, max: 24 }}
			/>
		</Layout>
	);
}
