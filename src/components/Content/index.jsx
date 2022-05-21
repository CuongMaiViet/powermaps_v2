import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { Container } from '../../globalStyles'
import Tilty from 'react-tilty'
import {
  ContentButton,
  ContentColumn,
  ContentLink,
  ContentRow,
  ContentSec,
  Heading,
  Img,
  ImgWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './style'

const Content = ({
  primary,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  backgroundColor,
  to,
  inverse,
  reverse,
}) => {
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
    <ContentSec inverse={inverse}>
      <Container ref={ref}>
        <ContentRow reverse={reverse}>
          <ContentColumn>
            <TextWrapper>
              <TopLine
                initial={initial}
                transition={transition}
                animate={animation}
              >
                {topLine.text}
              </TopLine>
              <Heading
                initial={initial}
                transition={transition}
                animate={animation}
                inverse={inverse}
              >
                {headline}
              </Heading>
              <Subtitle
                initial={initial}
                transition={{ delay: 0.7, duration: 0.6 }}
                animate={animation}
                inverse={inverse}
              >
                {description}
              </Subtitle>
              <ContentButton
                initial={initial}
                transition={{ delay: 1, duration: 0.6 }}
                animate={animation}
                primary={primary}
                backgroundColor={backgroundColor}
                onClick={() => {}}
              >
                <ContentLink inverse={inverse.toString()} to={to}>
                  {buttonLabel}
                </ContentLink>
              </ContentButton>
            </TextWrapper>
          </ContentColumn>

          <ContentColumn
            initial={initial}
            transition={transition}
            animate={animation}
          >
            <Tilty
              max={30}
              scale={1.01}
              speed={200}
              glare={true}
              maxGlare={0.8}
            >
              <ImgWrapper backgroundColor={backgroundColor} inverse={inverse}>
                <Img
                  src={img}
                  alt={alt}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </ImgWrapper>
            </Tilty>
          </ContentColumn>
        </ContentRow>
      </Container>
    </ContentSec>
  )
}

export default Content
