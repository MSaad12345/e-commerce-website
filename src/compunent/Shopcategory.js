import React, { useContext } from 'react';
import './shopcategory.css'
import Shopcontext from '../compunent/context/shopcontext'; // if shopcontext is the default export
import dropdown_icon from '../assents/dropdown_icon.png'
import Item from '../item/item';

export default function Shopcategory(Props) {
  const { all_product = [] } = useContext(Shopcontext) || {}; // Default to an empty array

  return (
    <div className="shop-cetagory">
      <img src={Props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-product">
        {all_product.length > 0 ? (
          all_product.map((item, i) => {
            if (Props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.title}
                  image={item.image}
                  new={item.price}
                  old={item.old}
                />
              );
            }
            return null;
          })
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

// import React from 'react'

// const shopcategory = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default shopcategory

