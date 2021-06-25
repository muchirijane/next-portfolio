import Head from 'next/head';

import Layout from '../components/layout/Layout';
import data from '../data/About.json';
import TechStack from '../components/TechStack/TechStack';
import { AboutSection, AboutContent } from '../styles/About.styles';
export default function About() {
	console.log(data);
	return (
		<Layout>
			<Head>
				<title>Jane's Front-end Developer</title>
			</Head>
			<AboutSection>
				<h1>A brief summary about me</h1>

				{data.map((data) => (
					<AboutContent key={data.id}>
						<p>{data.para1}</p>
						<p>{data.para2}</p>
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
						<p>
							{data.para5}
							<a href={data.serverLink} target="_blank" rel="noopener noreferrer">
								{data.serverText}
							</a>
						</p>
						<p>
							{data.para6}
							<a href={data.designLink} target="_blank" rel="noopener noreferrer">
								{data.designText}{' '}
							</a>
						</p>
					</AboutContent>
				))}

				<TechStack />
			</AboutSection>
		</Layout>
	);
}
