import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer' >
        	<div>
             <sup style={{fontSize:'60%'}}>&#169;</sup> Vivek &nbsp; &nbsp; <span style={{fontSize:'12px',   fontWeight:'lighter'}}>2022-{new Date().getFullYear()}</span>
            </div>
    </div>
  )
}

export default Footer;