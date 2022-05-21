import React from 'react'
// import { Link } from 'react-router-dom'
import resources from '../../data/resources'
import Navbar from '../Navbar'
import { HeroSection, Video } from './style'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const { ref, inView } = useInView({
    rootMargin: '-80px',
  })

  return (
    <>
      <HeroSection ref={ref} id="hero">
        <Video autoPlay muted loop playsInline>
          <source src={resources.hero_video} type="video/mp4" />
        </Video>
      </HeroSection>
      <Navbar isFixed={true} hide={inView} />
    </>
  )
}

export default Hero
