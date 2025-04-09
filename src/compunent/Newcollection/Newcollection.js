import React from 'react'
import './Newcollection.css'
import Item from '../../item/item'
import New_collection from '../../assents/otherdata.js'

const Newcollection = () => {
  return (
    <div className='newcollection'>
      <h1>NEW COLLECTION </h1>
      <hr/>
      <div className='collections'>
        {New_collection.map((item,i)=>{
          return<Item key ={i} id={item.id} name={item.title} image={item.image} new={item.price}/>
        })}
      </div>
    </div>
  )
}

export default Newcollection
