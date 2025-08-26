import React from 'react'
import {  BannerPortfolio} from '../../ui'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import { ContenidoPortfolio } from './ContenidoPortfolio';
export const PortFolioComponent = () => {
  
  return (
    <>

 <BannerPortfolio descrip="Nuestras Obras"
  titulo="Portfolio"
   /> 
 <ContenidoPortfolio  />
    </>
  )
}
