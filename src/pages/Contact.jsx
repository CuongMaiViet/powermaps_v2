import React from 'react'
import Contactt from '../components/Contact'
import { motion } from 'framer-motion'

const Contact = () => {
  const animate = { translateX: '0%', opacity: 1 }
  const initial = { translateX: '100%', opacity: 0 }
  const exit = { translateX: '-100%', opacity: 0 }
  const transition = { duration: 0.5 }

  return (
    <motion.div
      animate={animate}
      initial={initial}
      exit={exit}
      transition={transition}
    >
      <Contactt id={'contact'} />
    </motion.div>
  )
}

export default Contact
