import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

function Contact() {
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      phone: formData.get('phone') // optional
    };

    data.access_key = "e2988d74-0183-400c-92f7-1b599d14a024";

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (response.ok) {
        setFormMessage('Message sent successfully!');
        e.target.reset();
      } else {
        setFormMessage(result.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setFormMessage('Connection error: ' + error.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="Message Icon" /></h3>
        <p>We'd love to hear from you! Whether you have a question about 
            our services, pricing, or anything else, our team is ready to
             answer all your </p>
        <ul>
            <li><img src={mail_icon} alt="Mail Icon" /> ghraj2083@gmail.com</li>
            <li><img src={phone_icon} alt="Phone Icon" /> +91 6205289787</li>
            <li><img src={location_icon} alt="Location Icon" /> 123 Main Street, City, Country</li>
        </ul>
      </div>
      <div className="contact-col">
        <form className='contact-form' onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Your Name' required />
          <label>Your Email</label>
          <input type="email" name='email' placeholder='Your Email' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Your Phone Number' />
          <label>Your Message</label>
          <textarea name='message' rows="6" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn dark-btn2'>Send Message</button>
        </form>
        <span className='form-msg'>{formMessage}</span>
      </div>
    </div>
  )
}

export default Contact
