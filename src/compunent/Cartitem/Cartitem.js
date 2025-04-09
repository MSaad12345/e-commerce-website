import React from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shopcontext";
import remove_icon from "../../assents/cart_cross_icon.png";
import "./Cartitem.css";

const Cartitem = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart-item">
      <div className="cartitem-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitem-format">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p className="cartname">{e.name}</p>
                <p className="cartprice">${e.new_price}</p>
                <button className="cartitem-quantity">{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartremove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitem-down">
        <div className="cartitem-total">
          <h1>cart Totals</h1>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
                <h3>Total</h3>
                <h3>${0}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitem-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitem-promobox"> 
                <input type="text" placeholder="Promo Code"/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
