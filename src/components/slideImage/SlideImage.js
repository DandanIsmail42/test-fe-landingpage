import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {ImPriceTags} from "react-icons/im"
import Slider from 'react-slick';
import "./slideImage.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const SlideImage = () => {
    const [datas, setDatas] = useState([])
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    useEffect(() => {
        getProducts()
      }, [])
    const getProducts = async() => {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}`)
        setDatas(response.data)
    }
   
  return (
    <div className='hero'>
         <Slider {...settings}>
            {datas.map((data) => {
                return(
                  <div className='cardPic'>
                      <img className='image-slide' src={data.image}></img>
                      <strong className='title mt-3'>{data.title}</strong>
                      <h6 className='price mt-2'><ImPriceTags /> {data.price}K</h6>
                      <p>{data.category}</p>
                  </div>
                )
            })}
       </Slider>
    </div>
  )
}

export default SlideImage


