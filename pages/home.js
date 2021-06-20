import Link from 'next/link';
import Image from 'next/image';
import { HomeContent, HomeContainer } from '../styles/Home.styles';
import TitleBg from '../public/background-title.svg';

export default function Home() {
	return (
		<HomeContainer>
			<Image className="backgroundImage" src={TitleBg} alt="background title named front end" />

			<HomeContent>
				<h3>
					Hello there,{' '}
					<span role="img" alt="waving hand emoji">
						👋🏽{' '}
					</span>{' '}
				</h3>
				<h2>I am Jane Tracy . </h2>
				<h1>
					A <span>passionate</span> developer{' '}
				</h1>
				<p>
					I am a self taught front end developer, who enjoys coding cool websites and making them user
					friendly and easy to navigate. User Expericence is important in what I create.{' '}
				</p>

				<Link href="/contact">
					<a>
						Hire Me
						<span>&rarr;</span>
					</a>
				</Link>
			</HomeContent>
		</HomeContainer>
	);
}
