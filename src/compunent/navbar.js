import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import logo from "../assents/logo.png"


function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img src={logo} alt='logo'></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  id='danger' to="/New">New</Link>
        </li>
        <li className="nav-item"  >
          <Link className="nav-link" to='/Men'>Men</Link>
        </li>
        
        <li className="nav-item"  >
          <Link className="nav-link" to='/Women'>Women</Link>
       
        </li>
        <li className="nav-item"  >
          <Link className="nav-link" to='/Kids'>Kids</Link>
       
        </li>
        <li className="nav-item"  >
          <Link className="nav-link" to='/About'>About</Link>
        </li>
        <li className="nav-item"  >
          <Link className="nav-link" to='/Contact'>Contact Us</Link>
        </li>
        
      </ul>
      <form className="d-flex">
       <Link to='/cart'> 
        <img src='https://static.vecteezy.com/system/resources/previews/001/504/962/original/shopping-cart-icon-free-vector.jpg' alt='cart-image'/>
      </Link>
        <Link to='/Loginsignup'><button className="btn btn-outline-success" type="submit">Login</button></Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar
