import { useEffect } from 'react'
import './App.css'
import './motion.css'
import { initMotion } from './motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuemSomos from './components/QuemSomos'
import Solucoes from './components/Solucoes'
import Sede from './components/Sede'
import Proposito from './components/Proposito'
import Cases from './components/Cases'
import Diferenciais from './components/Diferenciais'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => initMotion(), [])

  return (
    <>
      <Navbar />
      <Hero />
      <QuemSomos />
      <Solucoes />
      <Sede />
      <Proposito />
      <Cases />
      <Diferenciais />
      <CTA />
      <Footer />
    </>
  )
}

export default App
