import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Image from 'next/image'
import { FiLink, FiGithub } from 'react-icons/fi'

import data from '../data/Portfolio.json'
import {
  PortfolioContainer,
  FeaturedPortfolios,
  PortfolioContent,
  PortfolioImage,
  PortfolioText,
  PortfolioStack,
  PortfolioLinkContainer,
  PortfolioLink,
} from '../styles/Portfolio.styles'
import ExtraProjects from '../components/ExtraProjects/ExtraProjects'
import Button from '../components/UI/Button/Button'

export default function Portfolio() {
  const [showExtraProjects, setshowExtraProjects] = useState(false)

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const projectHandler = () => {
    setshowExtraProjects((previousProject) => !previousProject)
  }
  return (
    <>
      <PortfolioContainer id="portfolio">
        <h2>Portfolio</h2>
        <FeaturedPortfolios>
          {data.map((data) => (
            <PortfolioContent
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              key={data.id}
            >
              <PortfolioImage>
                <Image
                  src={data.image}
                  alt={data.alt}
                  width={630}
                  height={450}
                />
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
        <Button className="center" onClick={projectHandler}>
          View More Projects
        </Button>
        {showExtraProjects && <ExtraProjects />}
      </PortfolioContainer>
    </>
  )
}
