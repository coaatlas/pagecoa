import React from 'react'
import { BannerComponent, BannerTelefonos, CarrouselComponent, HeaderComponent } from '../../ui'

export const HomeComponent = () => {
  return (
   <>
<CarrouselComponent />


 <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6">
                    <div className="row gx-3 h-100">
                        <div className="col-6 align-self-start wow fadeInUp" data-wow-delay="0.1s">
                            <img className="img-fluid" src="https://github.com/coaatlas/pagecoa/blob/master/src/assets/img/home4.jpg?raw=true"/>
                        </div>
                        <div className="col-6 align-self-end wow fadeInDown" data-wow-delay="0.1s">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/9dejulio/23.jpeg?raw=true"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p className="fw-medium text-uppercase text-primary mb-1">About Us</p>
                    <h1 className="display-5 mb-4">COA Revestimientos Ofrecemos soluciones integrales instalando revestimientos vinilicos y Pvc</h1>
                    <p className="mb-4">Contamos con Trayectoria en el mercado, especializada en la instalación de pisos y revestimientos para instituciones en general. Abocados a satisfacer las necesidades de nuestros clientes, cumpliendo con elevados estándares de calidad y manteniendo la mejor relación costo-beneficio. Basándonos en la búsqueda permanente de la mejora continua, contamos con un equipo de asesores altamente calificados y dedicados, para así responder a sus requerimientos; brindando la mejor opción y solución a sus proyectos. Los invitamos a recorrer nuestra amplia gama de productos; tengan en cuenta que más que productos, nosotros ofrecemos un servicio.
                    </p>
                    <div className="d-flex align-items-center mb-4">
                       
                        <div className="ms-4">
                            <p><i className="fa fa-check text-primary me-2"></i>Pisos de pvc</p>
                            <p><i className="fa fa-check text-primary me-2"></i>Pisos de linóleo</p>                           
                            <p><i className="fa fa-check text-primary me-2"></i>Pisos de goma en baldosas</p>
                            <p><i className="fa fa-check text-primary me-2"></i>Pisos de goma</p>
                            <p><i className="fa fa-check text-primary me-2"></i>Pisos de listones</p>
                            <p><i className="fa fa-check text-primary me-2"></i>Pisos flotantes</p>
                            <p><i className="fa fa-check text-primary me-2"></i>Pisos encastrables</p>  
                            <p className="mb-0"><i className="fa fa-check text-primary me-2"></i>Pisos de alfombra en baldosas</p>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>



  <BannerComponent  descrip="Ofrecemos soluciones integrales instalando pisos y revestimientos vinilicos en todo el País."  />


   
   </>
  )
}
