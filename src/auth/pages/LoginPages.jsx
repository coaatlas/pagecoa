import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { customFetch } from '../../database/customfech';
import { BannerComponent } from '../../ui';
import { LoginComponets } from '../components/LoginComponets'

export const LoginPages = () => {
    
  const [items, setItems] = useState([]); 
  useEffect(() => {
           customFetch(1500,'login').then((data) => setItems(data));            
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
    <LoginComponets />
    </>
  
  )
}
}
