import React from 'react'
import './services.css'
import service1 from '../../assets/program-1.png'
import service2 from '../../assets/program-2.png'
import service3 from '../../assets/program-3.png'
import Service_icon_1 from '../../assets/program-icon-1.png'
import Service_icon_2 from '../../assets/program-icon-2.png'
import Service_icon_3 from '../../assets/program-icon-3.png'


function Services() {
  return (
    <div className='Services'>
        <div className="service"><img src={service1} alt="" />
        <div className="caption">
          <img src={Service_icon_1} alt="" />Exterior Building Design.</div></div>
        <div className="service"><img src={service2} alt="" />
        <div className="caption"><img src={Service_icon_2} alt="" />Interior Design.</div></div>
        <div className="service"><img src={service3} alt="" />
        <div className="caption"><img src={Service_icon_3} alt="" />Landscape Design.</div></div>
    </div>
  )
}

export default Services
