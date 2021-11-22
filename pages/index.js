import Layout from '../components/layout/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Typewriter from 'react-simple-typewriter'

import {
  HomeContent,
  Span,
  HomeContainer,
  PageLink,
  AboutLink,
  AboutContainer,
  HomeText,
  ImgWrapper,
} from '../styles/Home.styles'
import { AboutContent } from '../styles/About.styles'
import data from '../data/About.json'

import Portfolio from './portfolio'
import Contact from './contact'

export default function Index() {
  return (
    <>
      <Layout>
        <HomeContainer id="home">
          <HomeContent>
            <HomeText>
              <h3>
                Hello there,{' '}
                <span
                  role="img"
                  alt="waving hand emoji"
                  aria-label=" waving hand emoji"
                >
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
                    words={['creative', 'passionate', 'dedicated']}
                  />
                </Span>{' '}
                developer{' '}
              </h1>
              <p>
                I am a self taught front end developer, who enjoys coding cool
                websites and making them user friendly and easy to navigate.
                User Expericence is important in what I create.{' '}
              </p>
              <p>
                Video Intro:{' '}
                <a
                  className="textLink"
                  href="https://www.loom.com/share/b0d4906fcf0d4194b94d727aa7da9176"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introducing myself
                </a>
                ,{' '}
                <a
                  className="textLink"
                  href="https://www.loom.com/share/15a4b6e071164a12a40235b321d5c9a4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Why I started programming
                </a>{' '}
                and{' '}
                <a
                  className="textLink"
                  href="https://www.loom.com/share/078fb8e997744fe6a402fa1ec2dabd4b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  What cool project I have worked on recently.
                </a>
              </p>

              <Link href="/#contact">
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
                  <a
                    href={data.course1Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.course1}
                  </a>
                  ,
                  <a
                    href={data.course2Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.course2}
                  </a>{' '}
                  and
                  <a
                    href={data.course3Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.course3}
                  </a>
                </p>
                <p>
                  {data.para4}
                  <a
                    href={data.devLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.devText}
                  </a>
                  <span>{data.spanText}</span>
                  <a
                    href={data.scriptLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {data.scriptText}
                  </a>
                </p>
              </AboutContent>
            ))}
            <Link href="/about">
              <AboutLink className="link">Learn More</AboutLink>
            </Link>
          </AboutContainer>
          <Portfolio />
          <Contact />
        </HomeContainer>
      </Layout>
    </>
  )
}
