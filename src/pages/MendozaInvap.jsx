import React from 'react'

import { GaleriaImgComponent } from '../components/galeria/galeriaimg/GaleriaImgComponent'
import { LayoutsGaleria } from '../components/galeria/layoutgaleria/LayoutsGaleria'
import { BannerPortfolio } from '../ui'



export const MendozaInvap = () => {
  return (
    <>
    <BannerPortfolio
    descrip={"Nuestras Obras"}
    titulo={"Centro Argentino Prontoterapia - Mendoza"}
     />   
    <br />

    <LayoutsGaleria
    children={<GaleriaImgComponent tittle="MendozaInvap" value={100}      />}
    
    titulo={"Centro Argentino Prontoterapia - Mendoza"}
    subtitulo={"Centro Argentino Prontoterapia - Mendoza"}
    descrip={"instalación de revestimientos en pisos con PVC Amstrong"}
    titulo1={"Pisos"}
    descrip1={"instalación de revestimientos en pisos con revestimiento de vinilicos"}
    titulo2={"Caracteristicas"}
    descrip2={"Revestimiento de PVC homogéneo, de alto rendimiento, permite la construcción de áreas limpias según normas GMP Clase A"}
    titulo3={"Descripción"}
    descrip3={"Rollos de  Innovador diseño no direccional y policromo, disponible en 24 colores"}
    />         
   </>
  )
}
