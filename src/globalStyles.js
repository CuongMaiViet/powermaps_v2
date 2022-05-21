import styled, { createGlobalStyle, css } from 'styled-components'
import GlobalData from './data/GlobalData'

const GlobalStyle = createGlobalStyle`${css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
  }
  html {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 0px;
  }
`}`

export const Container = styled.div`
  width: 100%;
  max-width: 1330px;
  margin: 0 auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`

export const Section = styled.div`
  color: white;
  padding: 160px;
  background: ${({ inverse }) =>
    inverse ? GlobalData.reverseBackgoundColor : GlobalData.backgroundColor};
`

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ inverse }) =>
    inverse ? GlobalData.reverseBackgoundColor : GlobalData.backgroundColor};
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`
export const Button = styled.button`
  border-radius: 4px;
  background: none;
  white-space: space nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-weight: 600;
  color: white;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
`

export default GlobalStyle
