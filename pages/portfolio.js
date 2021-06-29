import React from 'react';
import Image from 'next/image';
import { FiLink, FiGithub } from 'react-icons/fi';
import Layout from '../components/layout/Layout';
import data from '../data/Portfolio.json';
import {
	PortfolioContainer,
	FeaturedPortfolios,
	PortfolioContent,
	PortfolioText,
	PortfolioStack,
	PortfolioLinkContainer,
	PortfolioLink
} from '../styles/Portfolio.styles';

export default function Portfolio() {
	return (
		<Layout>
			<PortfolioContainer>
				<FeaturedPortfolios>
					{data.map((data) => (
						<PortfolioContent key={data.id}>
							<Image src={data.image} alt={data.alt} width={450} height={300} />
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
			</PortfolioContainer>
		</Layout>
	);
}
