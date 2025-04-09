import React from 'react'
import './ReletedProduct.css'
import Item from '../../item/item'
import data from '../../assents/data'

const RelatedProduct = () => {
  return (
    <div className='related-product'>
        <h1>Related Product</h1>
        <hr/>
        <div className='related-product-item' >
      {data.map((item,i)=>{
          return<Item key ={i} id={item.id} name={item.title} image={item.image} new={item.price}/>
        })}
        </div>
    </div>
  )
}

export default RelatedProduct
