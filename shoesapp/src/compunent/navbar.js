import React from 'react'
import './style.css'
function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img src='https://png.pngtree.com/template/20200809/ourmid/pngtree-modern-sneaker-shoe-logo-image_401564.jpg' alt='logo'></img>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  id='danger' href="/">New</a>
        </li>
      
        <li className="nav-item"  >
          <a className="nav-link " href='/'>Male</a>
        </li>
        <li className="nav-item"  >
          <a className="nav-link" href='/'>Women</a>
        </li>
        <li className="nav-item"  >
          <a className="nav-link" href='/'>Men</a>
        </li>
        <li className="nav-item"  >
          <a className="nav-link" href='/'>About</a>
        </li>
        <li className="nav-item"  >
          <a className="nav-link" href='/'>Contact Us</a>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar
