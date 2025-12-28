import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import EncryptDecryptPanel from './components/EncryptDecryptPanel'
import FAQ from './components/Faq'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import ContactForm from './components/Contact'
import MadeWith from './components/MadeWith'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <Features/>
      <EncryptDecryptPanel/>
      <FAQ/>
      <Testimonials/>
      <Pricing/>
      <ContactForm/>
      <Footer/>
      <MadeWith/>
    </div>
  )
}

export default App
