import './App.css';
import Navbar from './compunent/navbar';
import Home from './compunent/home';
import News from './compunent/News';
import Cart from './compunent/cart';
import Product from './compunent/product';
import Men from './compunent/Men'
import About from './compunent/about/About';
import Women from './compunent/women/women';
import Kids from './compunent/kids/kids';
import Loginsignup from './compunent/Loginsignup';
import Footer from './compunent/footer/footer';
import React from 'react';


import {BrowserRouter , Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div >
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Men'  element={<Men/>}/>
      <Route path='/Women'  element={<Women/>}/>
      <Route path='/kids'  element={<Kids/>}/>
      <Route path='/About'  element={<About/>}/>
      <Route path='/Loginsignup' element={<Loginsignup/>}/>
      <Route path='/News' element={<News/>}/>
      <Route path='/cart' element={<Cart/>}/>
      {/* <Route path='/Product' element={<Product/>}/> */}
      <Route path='/Product/:productId' element={<Product />} />
    

  
     </Routes>
     <Footer/>
     </BrowserRouter>
     {/* <Home/> */}
    </div>
  );
}

export default App;


