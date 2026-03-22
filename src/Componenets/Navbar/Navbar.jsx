import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


  const openWhatsApp = () => {
    const phone = '917979881495' // replace with your number (country code + phone)
    const text = encodeURIComponent('Hello! I want to contact you.')
    const url = `https://wa.me/${phone}?text=${text}`
    window.open(url, '_blank')
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} >
      <img src={logo} alt="Logo" className='logo' />
      <ul className='nav-btn'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li><button className='btn' onClick={openWhatsApp}>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
