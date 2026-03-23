import React from 'react'
import './Developer.css'

const Developer = () => {
  const openDeveloperEmail = () => {
    const email = 'himanshukumar8051084723@gmail.com'
    const subject = encodeURIComponent('Developer Contact')
    const body = encodeURIComponent('Hello! I want to contact you about development services.')
    const url = `mailto:${email}?subject=${subject}&body=${body}`
    window.open(url, '_blank')
  }

  const openDeveloperWhatsApp = () => {
    const phone = '917979881495' // Adding country code 91
    const text = encodeURIComponent('Hello! I want to contact you about development services.')
    const url = `https://wa.me/${phone}?text=${text}`
    window.open(url, '_blank')
  }

  return (
    <div className='developer'>
      <p>Developed by Himanshu Kumar</p>
      <div className='developer-contact'>
        <span onClick={openDeveloperEmail} className='developer-link'>
          himanshukumar8051084723@gmail.com
        </span>
        <span> | </span>
        <span onClick={openDeveloperWhatsApp} className='developer-link'>
          +91 7979881495
        </span>
      </div>
    </div>
  )
}

export default Developer