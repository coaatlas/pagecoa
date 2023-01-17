import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
    <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Estamos En...</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>San Vicente, Bs As, Argentina</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>11-3313-8900</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>11-3324-9832</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>11-6235-0978</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>cubas_beto@hotmail.com</p>
                    <div className="d-flex pt-3">
                   
                                <Link to="/home" className="btn btn-square btn-primary rounded-circle me-2" href=""> <i className="fab fa-whatsapp"></i></Link>
                                <Link to="/home" className="btn btn-square btn-primary rounded-circle me-2" href=""> <i className="fab fa-facebook-f"></i></Link>
                                <Link to="/home" className="btn btn-square btn-primary rounded-circle me-2" href=""> <i className="fab fa-instagram"></i></Link>

                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Links</h5>
                    <Link to="/home" className="text-white btn btn-link">Home</Link>
                    <Link to="/portfolio" className="text-white btn btn-link">Portfolio</Link>
                    <Link to="/contact" className="text-white btn btn-link">Contacto</Link>
              
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Horas de Atención</h5>
                    <p className="mb-1">Lunes - Viernes</p>
                    <h6 className="text-light">09:00 am - 07:00 pm</h6>
                    <p className="mb-1">Savado</p>
                    <h6 className="text-light">09:00 am - 12:00 pm</h6>
                    <p className="mb-1">Domingo</p>
                    <h6 className="text-light">Closed</h6>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-white mb-4">Coa Revestimientos</h5>
               
                    <div className="position-relative w-100">
                    <a href="http://qr.afip.gob.ar/?qr=_qE5_c-7TZDch4_LUPqiKQ,," target="_F960AFIPInfo"><img src="http://www.afip.gob.ar/images/f960/DATAWEB.jpg" border="0" width="60px" height="80px"/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
