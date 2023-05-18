import React from 'react'
import "./choose.css"
import {AiOutlineSearch} from "react-icons/ai"
import {HiTemplate} from "react-icons/hi"
import {IoLocationOutline} from "react-icons/io5"
const Choose = () => {
  return (
    <div>
        <section className='choose'>
            <h5 className='choose-head-text'>Why Choose us ?</h5>
            <h1 className='choose-text'>We care about details and the quality of our products</h1>
            <div className='features'>
                <div className='features1'>
                    <div className='frame-icon'>
                        <AiOutlineSearch />
                    </div>
                    <h3> 5 Years of warranty for each product</h3>
                </div>
                <div className='features2'>
                <div className='frame-icon'>
                        <IoLocationOutline />
                    </div>
                    <h3> Services are available throughout the country</h3>
                </div>
                <div className='features3'>
                <div className='frame-icon'>
                        <HiTemplate />
                    </div>
                    <h3> guaranteed original goods</h3>
                    
                </div>
                
                
                
            </div>
        </section>
    </div>
  )
}

export default Choose