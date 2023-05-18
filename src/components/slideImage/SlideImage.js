import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactElasticCarousel from 'react-elastic-carousel'
import Item from "./item.js"
import {ImPriceTags} from "react-icons/im"
import "./slideImage.css"

const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 768, itemsToShow: 3},
  {width: 1200, itemsToShow: 4},
]

const SlideImage = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        getProducts()
      }, [])
    const getProducts = async() => {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}`)
        setDatas(response.data)
    }
   
  return (
    <div className='hero'>
       <ReactElasticCarousel breakPoints={breakPoints}>
            {datas.map((data) => {
                return(
                  <div className='cardPic'>
                      <Item src={data.image}></Item>
                      <strong className='title mt-3'>{data.title}</strong>
                      <h6 className='price mt-2'><ImPriceTags /> {data.price}K</h6>
                      <p>{data.category}</p>
                  </div>
                )
            })}
       </ReactElasticCarousel>
    </div>
  )
}

export default SlideImage