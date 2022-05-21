import styled from 'styled-components'

export const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const Video = styled.video`
  width: 100%;
  height: 100%;
  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }
  @media (max-aspect-ratio: 16/9) {
    width: auto;
    height: 100%;
  }
`
