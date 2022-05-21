import { useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import CarData from '../../data/CarData'
import { Container } from '../../globalStyles'
import { CarSection, HeadLine, Image, ImageWrapper, MasonryGrid } from './style'

const Cars = ({ id }) => {
  const initial = { opacity: 0, scale: 0.3 }
  const transition = { delay: 0.3, duration: 0.6 }
  const animation = useAnimation()
  const { ref, inView } = useInView({
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
      })
      return
    }

    animation.start({
      opacity: 0,
      scale: 0.3,
    })
  }, [inView, animation])

  return (
    <CarSection id={id}>
      <Container>
        <HeadLine>cars</HeadLine>
        <MasonryGrid ref={ref}>
          {CarData.map((e, i) => (
            <ImageWrapper
              animate={animation}
              initial={initial}
              transition={{ ...transition, delay: 0.2 + i * 0.1 }}
              key={i}
              className={e.class}
            >
              <Image src={e.img} alt="img" />
            </ImageWrapper>
          ))}
        </MasonryGrid>
      </Container>
    </CarSection>
  )
}

export default Cars
