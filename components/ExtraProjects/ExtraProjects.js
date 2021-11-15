import React, { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FiLink, FiGithub } from 'react-icons/fi'
import data from '../../data/ExtraProjects.json'
import Button from '../UI/Button/Button'
import {
  ProjectContainer,
  ProjectContent,
  ProjectLink,
  ProjectWrapper,
} from './ExtraProject.styles'
export default function ExtraProjects() {
  const [hideExtraProjects, sethideExtraProjects] = useState(true)
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const projectHandler = () => {
    sethideExtraProjects((previousState) => !previousState)
  }
  return (
    <>
      {hideExtraProjects && (
        <ProjectWrapper>
          <ProjectContainer
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {data.map((data) => (
              <ProjectContent key={data.id}>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
                <span>{data.stack}</span>
                <ProjectLink>
                  <a
                    className="link"
                    href={data.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLink /> preview
                  </a>

                  <a
                    className="outline-link"
                    href={data.source}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                    Source
                  </a>
                </ProjectLink>
              </ProjectContent>
            ))}
          </ProjectContainer>
          <Button onClick={projectHandler}>Show less</Button>
        </ProjectWrapper>
      )}
    </>
  )
}
