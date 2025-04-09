import React from 'react'
import './kids.css'
import banner from '../../assents/banner_kids.png'
import Item from '../../item/item'
import p25_img from "../../assents/product_25.png";
import p26_img from "../../assents/product_26.png";
import p27_img from "../../assents/product_27.png";
import p28_img from "../../assents/product_28.png";
import p29_img from "../../assents/product_29.png";
import p30_img from "../../assents/product_30.png";
import p31_img from "../../assents/product_31.png";
import p32_img from "../../assents/product_32.png";
import p33_img from "../../assents/product_33.png";
import p34_img from "../../assents/product_34.png";
import p35_img from "../../assents/product_35.png";
import p36_img from "../../assents/product_36.png";





const kids = () => {
    const kids =[
        {
            id: 25,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p25_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 26,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p26_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 27,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p27_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 28,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p28_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 29,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p29_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 30,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p30_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 31,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p31_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 32,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p32_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 33,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p33_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 34,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p34_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 35,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p35_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 36,
            name: "Boys Orange Colourblocked Hooded Sweatshirt",
            category: "kid",
            image: p36_img,
            new_price: 85.0,
            old_price: 120.5,
          },
    ]
  return (
    
    <div className='kids'>
      <img src={banner} alt=''/>
      <div className='kids-product'>
          {kids.map((item,i)=>{
            return<Item key={i} id ={item.id} name={item.name} image={item.image} new={item.new_price} old={item.old_price} />
          })}
      </div>
    </div>
  )
}

export default kids
