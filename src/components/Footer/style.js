import { Link } from 'react-router-dom'
import styled from 'styled-components'
import GlobalData from '../../data/GlobalData'
import { Section } from '../../globalStyles'

export const FooterSection = styled(Section)`
  padding: 100px 200px;
  @media screen and (max-width: 768px) {
    padding: 25px 0;
  }
`
export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const FooterLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  z-index: 50;
`
export const FooterOther = styled.div`
  display: flex;
  gap: 4rem;
  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
  @media screen and (max-width: 550px) {
    gap: 0rem;
  }
`

export const FooterImg = styled.img`
  margin-right: 1rem;
  width: 10rem;
`

export const FooterIconLink = styled.a`
  width: 30px;
  height: 30px;
  cursor: pointer;
  color: ${GlobalData.primaryColor};

  &:hover {
    color: #006cae;
  }
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.8rem;
`

export const FooterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  gap: 1rem;
`
