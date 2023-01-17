import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { customFetch } from '../../database/customfech';
import itemData from '../../database/datadb';
import { BannerComponent } from '../../ui';

export const ContenidoPortfolio = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {        
      customFetch(2000,'portfolio').then((data) => setItems(data));
     }, [items]);
  
    if (items.length === 0) {
        return (
         <>
 
 <br />
 <BannerComponent  descrip="Ofrecemos soluciones integrales instalando pisos y revestimientos vinilicos en todo el País."  />
       
  
 <Box sx={{ display: 'flex' ,
  justifyContent: 'center',
  alignItems: 'center',
}}>
      <CircularProgress
        color="secondary"
        size={60}
        thickness={2}
       />
    </Box>      
          
          </>
        );        
    }
    
    else{
 
  return (
   <>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto pb-4 wow fadeInUp" data-wow-delay="0.1s" >
                <p className="fw-medium text-uppercase text-primary mb-2">Portfolio</p>
                <h1 className="display-5 mb-4"> Nuestras Ultimas Obras</h1>                
            </div>

            <div className="row gy-5 gx-4">

                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/62.jpeg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/centroradiologicoformosa/51.jpeg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">Centro Radiológico Formosa</h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">Laboratorio Radiologico Formosa</p>
                            </div>
                        </div>
                       <Link to="/radiologoaformosa" className="btn btn-primary">Ver más</Link>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/9dejulio/20.jpeg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/9dejulio/20.jpeg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">Laboratorio 9 de Julio</h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">
                                Laboratorio 9 de Julio Buenos Aires Argentina
                                </p>
                            </div>
                        </div>
                        <Link to="/laboratorio9dejulio" className="btn btn-primary">Ver más</Link>
                    </div>
                </div>


                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/baradero/1.jpg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/baradero/1.jpg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">
                                Laboratorio Baradero
                                </h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">
                                Laboratorio Baradero Buenos Aires Argentina
                                </p>
                            </div>
                        </div>
                        <Link to="/baradero" className="btn btn-primary">Ver más</Link>
                    </div>
                </div>


                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/chacarita/1.jpg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/chacarita/1.jpg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">
                                Laboratorio Chacarita
                                </h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">
                                Laboratorio Chacarita Buenos Aires Argentina
                                </p>
                            </div>
                        </div>
                        <Link to="/laboratoriochacarita" className="btn btn-primary">Ver más</Link>
                    </div>
                </div>


                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/Hosp.Aleman/IMG-20190212-WA0010.jpg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/Hosp.Aleman/IMG-20190212-WA0010.jpg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">
                               Hospital Aleman
                                    </h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">
                                Hospital Aleman Buenos Aires Argentina
                                </p>
                            </div>
                        </div>
                        <Link to="/hospitalaleman" className="btn btn-primary">Ver más</Link>   
                    </div>
                </div>


                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item">
                        <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/lagunablanca/33.jpeg?raw=true" alt=""/>
                        <div className="service-img">
                            <img className="img-fluid" src="https://github.com/leofa741/coavsan/blob/master/src/assets/img/lagunablanca/15.jpeg?raw=true" alt=""/>
                        </div>
                        <div className="service-detail">
                            <div className="service-title">
                                <hr className="w-25"/>
                                <h3 className="mb-0">Hospital Laguna Blanca</h3>
                                <hr className="w-25"/>
                            </div>
                            <div className="service-text">
                                <p className="text-white mb-0">Hospital laguna Blanca</p>
                            </div>
                        </div>
                        <Link to="/hospital-laguna-blanca" className="btn btn-primary">Ver más</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}
}
