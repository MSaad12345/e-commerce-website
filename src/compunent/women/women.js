import React from 'react'
import './women.css'
import banner from "../../assents/banner_women.png"
import Item from '../../item/item'
import p1_img from "../../assents/product_1.png";
import p2_img from "../../assents/product_2.png";
import p3_img from "../../assents/product_3.png";
import p4_img from "../../assents/product_4.png";
import p5_img from "../../assents/product_5.png";
import p6_img from "../../assents/product_6.png";
import p7_img from "../../assents/product_7.png";
import p8_img from "../../assents/product_8.png";
import p9_img from "../../assents/product_9.png";
import p10_img from "../../assents/product_10.png";
import p11_img from "../../assents/product_11.png";
import p12_img from "../../assents/product_12.png";

const women = () => {
    const women =[
        {
            id: 1,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p1_img,
            new_price: 50.0,
            old_price: 80.5,
          },
          {
            id: 2,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p2_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 3,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p3_img,
            new_price: 60.0,
            old_price: 100.5,
          },
          {
            id: 4,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p4_img,
            new_price: 100.0,
            old_price: 150.0,
          },
          {
            id: 5,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p5_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 6,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p6_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 7,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p7_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 8,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p8_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 9,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p9_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 10,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p10_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 11,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p11_img,
            new_price: 85.0,
            old_price: 120.5,
          },
          {
            id: 12,
            name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
            category: "women",
            image: p12_img,
            new_price: 85.0,
            old_price: 120.5,
          },
    ]
  return (
    <div className='women'>
        <img src={banner} alt=''/>
        <div className='women-product'>
          {women.map((item,i)=>{
            return<Item key={i} id ={item.id} name={item.name} image={item.image} new={item.new_price} old={item.old_price} />
          })}
      </div>
    </div>
  )
}

export default women
