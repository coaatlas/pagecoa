import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { customFetch } from '../database/customfech';
import { BannerComponent } from '../ui';

export const NotFound = () => {
    const [items, setItems] = useState([]); 
    useEffect(() => {
             customFetch(3000,'NotFound').then((data) => setItems(data));            
     }, [items]);
  
    if (items.length === 0) {
        return (
         <>
         <br />
         <br />
         <br />
         <br />
         <br />
         <br />
  <BannerComponent  descrip="Ofrecemos soluciones integrales instalando pisos y revestimientos vinilicos en todo el País."  />
  
  <Box sx={{ display: 'flex' ,
   justifyContent: 'center',
   alignItems: 'center',
  }}>
       <CircularProgress
         color="secondary"
         size={40}
         thickness={3}
        />
     </Box>           
          </>
        );       
    }   
    else{
  return (
    <>
     <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                    <h1 className="display-1">404</h1>
                    <h1 className="mb-4">Page Not Found</h1>
                    <p className="mb-4">Lo sentimos, la página que ha estado buscando no existe o no tiene permiso para acceder a ella en nuestro sitio web.
                     Ingrese con su usuario y contraseña...
                     o comuniquese con el administrador del sitio web.


                     
                     </p>
                     <Link to="/home"><a className="btn btn-primary py-3 px-5" href="">Go Back To Home</a></Link>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}
}
