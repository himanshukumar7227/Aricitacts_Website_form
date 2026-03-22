import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='hero container'>
      <div className={`hero-text ${isVisible ? 'hero-text--visible' : ''}`}>
        <h1>Welcome to Our Website</h1>
        <p>We provide you comfort with best designs for your home. 
            You will find everything you need to make your 
            space beautiful and functional.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="Dark Arrow" /></button>
      </div>
    </div>
  )
}

export default Hero
