import { Box, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { HomeComponent } from '../components'
import { customFetch } from '../database/customfech';

import { BannerComponent } from '../ui';

export const Home = () => {

  
  const [items, setItems] = useState([]); 
   useEffect(() => {
            customFetch(3000,'home').then((data) => setItems(data));            
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

    < HomeComponent  />
     
    </>
  )
}
}
