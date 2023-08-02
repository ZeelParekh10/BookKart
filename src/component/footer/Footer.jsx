import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
      <div className="logo">
              <img src="./src/assets/site-logo.svg" alt="" />
            </div>
            <div className='credits'>
            <span>© Tatvasoft.com All Rights Reserved</span>
            </div>
      </div>
    </div>
  )
}

export default Footer