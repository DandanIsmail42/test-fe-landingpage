import React, { useEffect, useState } from 'react'
import "./promo.css"
import axios from 'axios'

const Promo = () => {
  const [datas, setDatas] = useState([])

    useEffect(() => {
        getProductsLimit()
      }, [])
    const getProductsLimit = async() => {
        const response = await axios.get(`${process.env.REACT_APP_BASEURL}?limit=3`)
        setDatas(response.data)
    }
  return (
    <div>
        <div className='picture'>
          {datas.map((data) => {
            return(
               <img className='picture1' src={data.image}></img>
            )
          })}
           
            <div className='disc'>
                <h4 className='dis-text'>Discount up to 70% Buy 1 get 1</h4>
                <p>Only on our official website, get a special free hoodie offer for purchasing products worth 300k!</p>
            </div>
        </div>
    </div>
  )
}

export default Promo