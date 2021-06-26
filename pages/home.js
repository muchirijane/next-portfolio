import Link from 'next/link';
import Image from 'next/image';
import Typewriter from 'react-simple-typewriter';
import { HomeContent, Span, HomeContainer, PageLink, AboutLink, AboutContainer,HomeText } from '../styles/Home.styles';
import { AboutContent } from '../styles/About.styles';
import data from '../data/About.json';
import profile from '../public/girl.svg';

export default function Home() {
	return (
		<HomeContainer>
			<HomeContent>
				<Image className="rotate-img" src={profile} alt="3d design of a happy girl" />
				<HomeText>
					<h3>
						Hello there,{' '}
						<span role="img" alt="waving hand emoji" aria-label=" waving hand emoji">
							👋🏽{' '}
						</span>{' '}
					</h3>
					<h2>I am Jane Tracy . </h2>
					<h1>
						A{' '}
						<Span>
							<Typewriter
								loop
								cursor
								cursorStyle="😎"
								typeSpeed={70}
								deleteSpeed={50}
								delaySpeed={1000}
								words={[ 'creative', 'passionate', 'dedicated' ]}
							/>
						</Span>{' '}
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
				</HomeText>
			</HomeContent>
			<AboutContainer>
				<h2>About Me</h2>
				{data.map((data) => (
					<AboutContent key={data.id}>
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
					</AboutContent>
				))}
				<Link href="/about">
					<AboutLink className="link">Learn More</AboutLink>
				</Link>
			</AboutContainer>
		</HomeContainer>
	);
}
