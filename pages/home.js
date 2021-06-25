import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'react-simple-typewriter';
import { HomeContent, HomeContainer, PageLink } from '../styles/Home.styles';
import data from '../data/About.json';
import TitleBg from '../public/background-title.svg';

export default function Home() {
	return (
		<HomeContainer>
			<Image className="backgroundImage" src={TitleBg} alt="background title named front end" />

			<HomeContent>
				<h3>
					Hello there,{' '}
					<span role="img" alt="waving hand emoji" aria-label=" waving hand emoji">
						👋🏽{' '}
					</span>{' '}
				</h3>
				<h2>I am Jane Tracy . </h2>
				<h1>
					A{' '}
					<span>
						<Typewriter
							loop
							cursor
							cursorStyle="😎"
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1000}
							words={[ 'creative', 'passionate', 'dedicated' ]}
						/>
					</span>{' '}
					developer{' '}
				</h1>
				<p>
					I am a self taught front end developer, who enjoys coding cool websites and making them user
					friendly and easy to navigate. User Expericence is important in what I create.{' '}
				</p>

				<Link href="/contact">
					<PageLink className="link">
						Hire Me
						<span>&rarr;</span>
					</PageLink>
				</Link>
			</HomeContent>
			{data.map((data) => (
				<div key={data.id}>
					<p>
						{data.para3}
						<a href={data.course1Link} target="_blank" rel="noopener noreferrer">
							{data.course1}
						</a>,
						<a href={data.course2Link} target="_blank" rel="noopener noreferrer">
							{data.course2}
						</a>{' '}
						and
						<a href={data.course3Link} target="_blank" rel="noopener noreferrer">
							{data.course3}
						</a>
					</p>
					<p>
						{data.para4}
						<a href={data.devLink} target="_blank" rel="noopener noreferrer">
							{data.devText}
						</a>
						<span>{data.spanText}</span>
						<a href={data.scriptLink} target="_blank" rel="noopener noreferrer">
							{data.scriptText}
						</a>
					</p>
				</div>
			))}
		</HomeContainer>
	);
}
