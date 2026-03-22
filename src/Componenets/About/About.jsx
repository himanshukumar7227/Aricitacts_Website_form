import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Building designs</h2>
        <p>We are a team of professionals dedicated to providing the best architecture for our clients.</p>
      </div>
    </div>
  )
}

export default About
