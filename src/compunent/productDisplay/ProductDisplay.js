import React from "react";
import "./Productdisplay.css";
import star_icon from "../../assents/star_icon.png";
import star_dull_icon from "../../assents/star_dull_icon.png";
import { useContext } from "react";
import { ShopContext } from "../context/shopcontext";

const ProductDisplay = (props) => {
  const { product } = props; // Ensure props is correctly destructured
  const {addtoCart} =useContext(ShopContext)

  if (!product) {
    return <div>Loading...</div>; // Handle case where product data is not yet available
  }

  return (
    <div className="productdisplay">
      <div className="display-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="pruductdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          A product description is a form of marketing copy used to describe
          and explain the benefits of your product. In other words, it
          provides all the information and details of your product on your
          ecommerce site.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size-list">
            <div className="productdisplay-right-size-item">S</div>
            <div className="productdisplay-right-size-item">M</div>
            <div className="productdisplay-right-size-item">L</div>
            <div className="productdisplay-right-size-item">XL</div>
            <div className="productdisplay-right-size-item">XXL</div>
          </div>
        </div>
        <button onClick={()=>{addtoCart(product.id)}}>ADD To CART</button>
        <p className="productdisplay-right-category">
          <span>category :</span> {product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span> Modern,Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
