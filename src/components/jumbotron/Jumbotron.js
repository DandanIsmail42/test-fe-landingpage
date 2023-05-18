import React from 'react'
import "./jumbotron.css"
import {AiOutlineSearch, AiOutlinePlayCircle} from "react-icons/ai"
const Jumbotron = () => {
  return (
    <div>
        <div className='jumbotron' >
            <div className='jumbo1'>
                <h1>Your convenience <span>is our satisfaction.</span>
                Just order online, we will deliver the goods to your home. our services throughout Indonesian.</h1>
                 <button className='search'><AiOutlineSearch /> search</button>
                 <button className='watch'><AiOutlinePlayCircle /> watch</button>
            </div>
           
            <div className='jumbo2'>
                <img className='hero-pic' src='https://c.pxhere.com/photos/2d/29/alley_bag_beautiful_daylight_dress_fashion_girl_hairstyle-1531477.jpg!d'></img>
            </div>
           
        </div>
    </div>
  )
}

export default Jumbotron


