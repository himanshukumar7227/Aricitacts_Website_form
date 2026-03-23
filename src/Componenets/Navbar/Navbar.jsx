import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

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
    
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`} >
      <img src={logo} alt="Logo" className='logo' />
        <ul className={`nav-btn ${menuOpen ? 'mobile-menu' : ''}`}>
          <li><Link to="hero" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to="service" spy={true} smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={-260} duration={500}>
        <button className='btn'>Contact Us</button></Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
