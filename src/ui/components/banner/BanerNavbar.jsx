import React from 'react'

export const BanerNavbar = () => {
  return (
   <>
       <div className="container-fluid bg-dark px-0">
        <div className="row g-0 d-none d-lg-flex">
            <div className="col-lg-6 ps-5 text-start">
                <div className="h-100 d-inline-flex align-items-center text-white">
                    <span>Contáctanos:</span>
                    <span className="btn btn-link text-light" href=""><i className="fa fa-envelope"> cubas_beto@hotmail.com</i></span>
                    <span className="fs-5 fw-bold me-2"><i className="fa fa-phone-alt me-1"></i>11-3324-9832</span>
                            
                </div>
            </div>
            <div className="col-lg-6 text-end">
                <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                
                </div>
            </div>
        </div>
    </div>
   
   </>
  )
}
