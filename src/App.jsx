import React from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Pages from './pages/Pages'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Pages />
      <Footer />
    </BrowserRouter>
  )
}

export default App
