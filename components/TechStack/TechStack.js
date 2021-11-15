import { useEffect } from 'react'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'

import { techStackUsed, designStackUsed } from '../../data/Icons'

import {
  TechContainer,
  TechContent,
  TechIconItem,
  TechIconImage,
} from './TechStack.styles'

export default function TechStack() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <TechContainer>
      <h2>My Tech stack and tools</h2>

      <TechContent data-aos="zoom-in-left">
        {techStackUsed.map((item, index) => (
          <TechIconItem key={index}>
            <TechIconImage>
              <Image src={item.img} alt={item.alt} width={32} height={32} />
            </TechIconImage>

            <h3>{item.text}</h3>
          </TechIconItem>
        ))}
      </TechContent>

      <h2>My Design tools</h2>

      <TechContent data-aos="fade-up-left">
        {designStackUsed.map((item, index) => (
          <TechIconItem key={index}>
            <TechIconImage>
              <Image src={item.img} alt={item.alt} width={32} height={32} />
            </TechIconImage>
            <h3>{item.text}</h3>
          </TechIconItem>
        ))}
      </TechContent>
    </TechContainer>
  )
}
