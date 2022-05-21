import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Route, Routes, useLocation } from 'react-router-dom'

const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
