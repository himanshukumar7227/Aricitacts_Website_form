import React from 'react'
import './Title.css'

const Title = ({SubTitle, Title}) => {
  return (
    <div className='title'>
      <p>{SubTitle}</p>
      <h2>{Title}</h2>
    </div>
  )
}

export default Title
