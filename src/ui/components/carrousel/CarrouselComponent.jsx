import React from 'react'

export const CarrouselComponent = () => {
  return (
   <>
   
   
   <div className="container-fluid px-0 mb-1">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="https://github.com/coaatlas/pagecoa/blob/master/src/assets/img/invap/8.jpg?raw=true" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10 text-start">
                                     <br /> <br />
                                    <p className="fs-5 fw-medium text-primary text-uppercase animated slideInRight">25 años de experiencia instalando</p>
                                    <h1 className="display-1 text-white mb-5 animated slideInRight">Pisos vinilicos y Pvc</h1>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="https://github.com/coaatlas/pagecoa/blob/master/src/assets/img/invap/5.jpg?raw=true" alt="Image"/>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-10 text-start">
                                    <br /> <br /> <br />
                                    <p className="fs-5 fw-medium text-primary text-uppercase animated slideInRight">25 años de experiencia instalando</p>
                                    <h3 className="display-1 text-white mb-5 animated slideInRight">Somos Un equipo altamente capacitado.</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            
        </div>
    </div></>


  )
}
