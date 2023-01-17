import React from 'react'

export const BannerContact = ({descrip}) => { 
  return (
    <section className="section ">
        <br/>
        <br/>
        <br/>
        <br/>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
          <h1 className="display-3 text-white animated slideInRight"
            style={{
                color: "white !important",
                fontFamily: "Roboto",
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "left",
                textShadow: "2px 2px 4px #000000",
                textTransform: "uppercase",
               
                textDecorationColor: "white",
                textDecorationStyle: "double",
                textDecorationThickness: "5px",
                textUnderlineOffset: "10px",
                textRendering: "optimizeLegibility",
                textOrientation: "upright",
                textOverflow: "clip",
                textIndent: "0px",
                textJustify: "auto",
                textKashida: "auto",
                textKashidaSpace: "0px",
               
            }}
          > {descrip}</h1>
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb animated slideInLeft mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item " aria-current="page">{descrip}</li>
              </ol>
          </nav>
      </div>
  </div>
</section>
  )
}
