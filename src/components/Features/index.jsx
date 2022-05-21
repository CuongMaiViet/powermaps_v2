import React, { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Container } from '../../globalStyles'
import {
  FeatureColumn,
  FeatureContentDesc,
  FeatureContentTitle,
  FeatureImage,
  FeatureImageWrap,
  FeatureMainText,
  FeatureSection,
  FeatureTextWrapper,
  FeatureTitle,
  FeatureWrapper,
} from './style'
import FeatureData from '../../data/FeatureData'

const Features = ({ id }) => {
  const { title, text, content } = FeatureData
  const initial = {
    scale: 0.2,
    y: 100,
    opacity: 0,
  }

  const animation = useAnimation()

  const { ref, inView } = useInView({
    threshold: 0.4,
  })

  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        y: 0,
        opacity: 1,
      })
    }
  }, [inView, animation])

  return (
    <FeatureSection id={id}>
      <Container ref={ref}>
        <FeatureTextWrapper
          initial={initial}
          animate={animation}
          transition={{ duration: 0.7 }}
        >
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureMainText>{text}</FeatureMainText>
        </FeatureTextWrapper>

        <FeatureWrapper>
          {content.map((e, i) => (
            <FeatureColumn
              initial={initial}
              animate={animation}
              transition={{ duration: 0.7 + i * 0.3 }}
              key={i}
            >
              <FeatureImageWrap className={e.feature}>
                <FeatureImage src={e.image} alt="feature" />
              </FeatureImageWrap>

              <FeatureContentTitle>{e.feature}</FeatureContentTitle>
              <FeatureContentDesc>{e.desc}</FeatureContentDesc>
            </FeatureColumn>
          ))}
        </FeatureWrapper>
      </Container>
    </FeatureSection>
  )
}

export default Features
