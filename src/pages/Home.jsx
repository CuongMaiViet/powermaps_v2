import React from 'react'
import Cars from '../components/Cars'
import Content from '../components/Content'
import Hero from '../components/Hero'
import Info from '../components/Info'
import ContentData from '../data/ContentData'
import { motion } from 'framer-motion'

const Home = () => {
  const animate = { opacity: 1 }
  const initial = { opacity: 0 }
  const exit = { opacity: 0 }
  const transition = { duration: 0.5 }

  return (
    <motion.div
      animate={animate}
      initial={initial}
      exit={exit}
      transition={transition}
    >
      <Hero />
      <Info id={'about'} />
      {/* <Features id={'features'} /> */}
      <div id="features">
        {ContentData.map((e, i) => (
          <Content {...e} key={i} />
        ))}
      </div>

      <Cars id={'cars'} />
    </motion.div>
  )
}

export default Home
