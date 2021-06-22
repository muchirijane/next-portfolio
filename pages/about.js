import Head from 'next/head';
import Layout from '../components/layout/Layout';
import data from '../data/About.json';
import { AboutSection, AboutContent } from '../styles/About.styles';
export default function About() {
	console.log(data);
	return (
		<Layout>
			<Head>
				<title>Jane's Front-end Developer</title>
			</Head>
			<AboutSection>
				<h1>About Me</h1>

				{data.map((data) => (
					<AboutContent key={data.id}>
						<p>{data.para1}</p>
						<p>{data.para2}</p>
						<p>
							{data.para3}
							<a href="#">{data.course1}</a>,
							<a href="#">{data.course2}</a> and
							<a href="#">{data.course3}</a>
						</p>
						<p>{data.para4}</p>
					</AboutContent>
				))}
			</AboutSection>
		</Layout>
	);
}
