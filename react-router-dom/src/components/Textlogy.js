import React from 'react'

const Textlogy = () => {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{height:"600px"}}>
            <div className="carousel-item active">
            <img src="timage3.jpg" className="d-block w-100"  alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="timage4.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="timage2.jpg" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
            <img src="timage1.jpg" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
</div>
  )
}

export default Textlogy