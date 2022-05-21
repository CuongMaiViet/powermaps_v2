import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Section } from '../../globalStyles'

export const CarSection = styled(Section)`
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 70px 0;
  }
`

export const HeadLine = styled.h1`
  width: 100%;
  text-align: center;
  /* font-size: 3rem; */
  font-size: 5rem;
  text-transform: capitalize;
`

export const MasonryGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); // change width of normal image
  grid-auto-rows: 300px; // change height of normal image
  grid-auto-flow: dense;
  margin-top: 4rem;

  /* @media screen and (max-width: 550px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    > a > img {
      max-height: 300px;
      object-position: center;
    }
  } */
`

export const ImageWrapper = styled(motion.a)`
  display: block;
  width: 100%;
  height: 100%;
  grid-column: ${({ className }) =>
    className === 'wide' || className === 'big' ? 'span 2' : 'span 1'};
  grid-row: ${({ className }) =>
    className === 'tall' || className === 'big' ? 'span 2' : 'span 1'};
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
