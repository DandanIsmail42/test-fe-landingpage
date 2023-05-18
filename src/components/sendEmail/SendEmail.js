import React from 'react'
import './sendEmail.css'
import {AiOutlineMail} from "react-icons/ai"
const SendEmail = () => {
  return (
    <div className='sendEmail'>
        <h5 className='limited-deals'>LIMITED DEALS</h5>
        <h1 className='become'>Become a member and get 10% off of your first purchase</h1>
        <input className='inputEmail' type='text' placeholder="Enter your email here" />
        <button className='btnEmail'><AiOutlineMail /></button>
    </div>
  )
}

export default SendEmail