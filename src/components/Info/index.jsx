import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import {
  InfoColumn,
  InfoDesc,
  InfoHeading,
  InfoImage,
  InfoNumber,
  InfoOverlay,
  InfoRow,
  InfoSection,
  InfoText,
  InfoWrapper,
  Statistic,
} from './style'
import resources from '../../data/resources'
import InfoData from '../../data/InfoData'
import { counterUp } from 'counterup2'

const Info = ({ id }) => {
  const { heading, desc, statistic } = InfoData

  const { ref, inView } = useInView({
    threshold: 0.4,
  })

  useEffect(() => {
    if (inView) {
      document.querySelectorAll('.number').forEach((e) => {
        counterUp(e, {
          duration: 2000,
          delay: 16,
        })
      })
    }
  }, [inView])

  return (
    <InfoSection id={id}>
      <InfoRow>
        <InfoColumn>
          <InfoOverlay></InfoOverlay>
          <InfoImage src={resources.img8} alt="img" />
        </InfoColumn>
        <InfoColumn ref={ref}>
          <InfoWrapper>
            <InfoHeading>{heading}</InfoHeading>
            <InfoDesc>{desc}</InfoDesc>
          </InfoWrapper>

          <Statistic>
            {statistic.map((e, i) => (
              <InfoColumn key={i}>
                <InfoNumber className="number">{e.number}+</InfoNumber>
                <InfoText>{e.text}</InfoText>
              </InfoColumn>
            ))}
          </Statistic>
        </InfoColumn>
      </InfoRow>
    </InfoSection>
  )
}

export default Info
