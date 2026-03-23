import React from 'react'
import Navbar from './Componenets/Navbar/Navbar.jsx'
import Hero from './Componenets/Hero/Hero.jsx'
import Services from './Componenets/Services/Services.jsx'
import Title from './Componenets/Title/Title.jsx'
import About from './Componenets/About/About.jsx'
import Contact from './Componenets/Contact/Contact.jsx'
import Footer from './Componenets/Footer/Footer.jsx'
import Developer from './Componenets/Developer/Developer.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title SubTitle='Our Services' Title='What We Offer' />
        <Services />
        <About />
        <Title SubTitle='Contact Us' Title='Get In Touch' />
        <Contact/>
        <Footer/>
        <Developer/>
      </div>
    </div>
  )
}

export default App
