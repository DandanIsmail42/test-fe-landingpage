import React from 'react'
import {IoLogoDesignernews} from "react-icons/io5"
import './footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer1'>
        <h6><IoLogoDesignernews className='logo-nav'/> Online <span className='s'>S</span>tore</h6>
        <p className='p-footer'>We are an online store that prioritizes customer satisfaction. feel free to shop in our store, buy the best products in our store soon.</p>
        <p className='p-footer'>&copy;Copyright 2023 DN Online Store</p>
        </div>
        
        <div className='other-footer'>
            <strong>Support</strong>
            <p className='p-footer'>FAQ</p>
            <p className='p-footer'>Shopping & Returns</p>
            <p className='p-footer'>Care guede</p>
            <p className='p-footer'>Redeem Warranty</p>
        </div>
        <div className='other-footer'>
            <strong>Social Media</strong>
            <p className='p-footer'>Facebook</p>
            <p className='p-footer'>Twitter</p>
            <p className='p-footer'>Instagram</p>
            <p className='p-footer'>Tiktok</p>
        </div>
        <div className='other-footer'>
            <strong>About us</strong>
            <p className='p-footer'>Our story</p>
            <p className='p-footer'>Designer</p>
            <p className='p-footer'>Craftmanshift</p>
            <p className='p-footer'>Sustainabillity</p>
        </div>
    </footer>
  )
}

export default Footer