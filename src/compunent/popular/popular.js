import React from 'react'
import './popular.css'
import Data_product from '../../assents/data.js'
import Item from '../../item/item.js'

function popular() {
  
  return (
    <div className='popular'>
      <h1> POPULAR IN MEN</h1>
      <hr/>
      <div className='popular-item'>
        {Data_product.map((item,i)=>{
          return<Item key ={i} id={item.id} name={item.title} image={item.image} new={item.price}/>
        })}
      </div>
    </div>
  )
}

export default popular
