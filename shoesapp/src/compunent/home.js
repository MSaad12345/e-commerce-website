import React from 'react'
import './style.css'

function home() {
  return (
    <div>
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> 
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 6"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/free-photo/beautiful-female-shopaholic-kissing-high-heels_329181-3849.jpg?t=st=1728048095~exp=1728051695~hmac=a5c0a2792275f972ecc676cb3a3cf5f6d4858b881ecf1a6a2c1fda2c2d792014&w=900" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-photo/woman-wearing-orange-pants-pink-blue-background_1122100-11854.jpg?w=1060" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-photo/person-wearing-pair-shoes-with-blue-background_1201856-1273.jpg?w=740" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <div  className='container  cards-container '>
      <a href='/'><div className="card" >
  <img src="" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
 
  </div>
</div> </a>
      <a href='/'><div className="card" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
 
  </div>
</div> </a>
      <a href='/'><div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
   
  </div>
</div> </a>
      <a href='/'><div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
  
  </div>
  </div>
 </a>
      <a href='/'><div className="card" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
   
  </div>
</div> </a>
      <a href='/'><div className="card" >
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
   
  </div>
</div> </a>
    </div>

    </div>
  )
}

export default home
