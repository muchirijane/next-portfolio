import React, { useState } from 'react';
import Image from 'next/image';
import { FiLink, FiGithub } from 'react-icons/fi';
import Layout from '../components/layout/Layout';
import data from '../data/Portfolio.json';
import {
	PortfolioContainer,
	FeaturedPortfolios,
	PortfolioContent,
	PortfolioImage,
	PortfolioText,
	PortfolioStack,
	PortfolioLinkContainer,
	PortfolioLink
} from '../styles/Portfolio.styles';
import ExtraProjects from '../components/ExtraProjects/ExtraProjects';
import Button from '../components/UI/Button/Button';

export default function Portfolio() {
	const [ showExtraProjects, setshowExtraProjects ] = useState(false);

	const projectHandler = () => {
		setshowExtraProjects((previousProject) => !previousProject);
	};
	return (
		<>
			<PortfolioContainer id='portfolio'>
				<h2>Portfolio</h2>
				<FeaturedPortfolios>
					{data.map((data) => (
						<PortfolioContent key={data.id}>
							<PortfolioImage>
								<Image src={data.image} alt={data.alt} width={630} height={450} />
							</PortfolioImage>

							<PortfolioText>
								<h3>{data.title}</h3>

								<div>
									{data.stack.map((stack) => (
										<React.Fragment key={stack}>
											<PortfolioStack>{stack}</PortfolioStack>
										</React.Fragment>
									))}
									<p>{data.content}</p>
									<PortfolioLinkContainer>
										<PortfolioLink
											className="link"
											href={data.preview}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FiLink /> preview
										</PortfolioLink>

										<PortfolioLink
											className="outline-link"
											href={data.source}
											target="_blank"
											rel="noopener noreferrer"
										>
											<FiGithub />
											Source
										</PortfolioLink>
									</PortfolioLinkContainer>
								</div>
							</PortfolioText>
						</PortfolioContent>
					))}
				</FeaturedPortfolios>
				<Button className='center' onClick={projectHandler}>View More</Button>
				{showExtraProjects && <ExtraProjects />}
			</PortfolioContainer>
		</>
	);
}
