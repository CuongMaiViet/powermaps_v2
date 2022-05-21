import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
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
      About
    </motion.div>
  )
}

export default About
