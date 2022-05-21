import styled from 'styled-components'
import { Section } from '../../globalStyles'

export const InfoSection = styled(Section)`
  padding: 150px 0;

  background: linear-gradient();
  @media screen and (max-width: 960px) {
    padding: 90px 20px;
  }
`

export const InfoRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, minmax(2rem, 1fr));
  margin-top: 5rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(1, 1fr);

    > div:first-child {
      display: none;
    }
  }
`

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 960px) {
    align-items: center;
    span {
      align-items: left;
    }
  }
`
export const InfoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  outline: none;
  /* box-shadow: rgba(0, 0, 0, 1) 0px 0px 0px 1000px inset; */
`

export const InfoOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  position: absolute;
  box-shadow: rgba(0, 0, 0, 1) -80px 30px 50px inset,
    rgba(0, 0, 0, 1) 0px -30px 50px inset;
`
export const InfoWrapper = styled.div`
  margin: 0 4rem 2rem;
  @media screen and (max-width: 960px) {
    margin: 0 0 2rem;
  }
`

export const InfoHeading = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }
`

export const InfoDesc = styled.p`
  line-height: 1.5rem;
  max-width: 100%;
`

export const Statistic = styled.div`
  margin: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8rem;
  @media screen and (max-width: 960px) {
    margin: 0rem;
    gap: 5rem;
  }
`

export const InfoNumber = styled.div`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  font-weight: bolder;
`

export const InfoText = styled.span`
  text-transform: capitalize;
  color: #95273d;
  font-size: 0.9rem;
  font-weight: 500;
  text-shadow: 0 0 20px #95273d, 0 0 15px #95273d, 0 0 10px #95273d;
`
