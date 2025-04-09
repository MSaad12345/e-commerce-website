import React from 'react'
import './footer.css'
import logo from "../../assents/logo.png"

const footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo} alt=''></img>
        <p>E-Commerce App</p>


      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icon-container'>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-facebook"></i>
        </div>
      </div>
      <div className='footer-copyrights'>
        <hr/>
        <p>Copyrights @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default footer
