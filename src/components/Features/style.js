import styled from 'styled-components'
import { motion } from 'framer-motion'
import GlobalData from '../../data/GlobalData'

export const FeatureSection = styled.div`
  padding: 140px;
  padding-top: 200px;
  position: relative;
  margin: 0 auto;
  background-color: ${({ inverse }) => (inverse ? 'white' : '#020305')};

  @media screen and (max-width: 768px) {
    padding: 50px 10px;
  }
`

export const FeatureTextWrapper = styled(motion.div)`
  position: relative;
  padding: 0 0 20px;
  margin-bottom: 4rem;
  color: ${({ inverse }) => (inverse ? 'black' : 'white')};
`

export const FeatureTitle = styled.h2`
  text-align: center;
  font-size: clamp(2.1rem, 7vw, 3rem);
  line-height: 1.06;
  letter-spacing: 0.4rem;
  margin: auto;
  color: ${({ inverse }) => (inverse ? 'black' : 'white')};
`
export const FeatureMainText = styled.p`
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin: 2rem auto 0;
  width: 70%;
  color: ${({ inverse }) => (inverse ? 'black' : 'white')};
`

export const FeatureWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  /* margin-top: 4rem; */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
  /* 
  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`
export const FeatureColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`
export const FeatureImageWrap = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: ${GlobalData.primaryColor};
  cursor: pointer;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`
export const FeatureImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center;
`

export const FeatureContentTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 1.5rem 0;
  /* letter-spacing: 2px; */
  color: ${({ inverse }) => (inverse ? 'black' : 'white')};
`
export const FeatureContentDesc = styled.p`
  width: 100%;
  font-size: 0.9rem;
  /* text-align: justify; */
  /* letter-spacing: 2px; */
  color: rgba(255, 255, 255, 0.6);
`
