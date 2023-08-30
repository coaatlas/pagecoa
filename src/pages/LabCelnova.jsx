import React from 'react'

import { GaleriaImgComponent } from '../components/galeria/galeriaimg/GaleriaImgComponent'
import { LayoutsGaleria } from '../components/galeria/layoutgaleria/LayoutsGaleria'
import { BannerPortfolio } from '../ui'



export const LavCelnova = () => {
  return (
    <>
    <BannerPortfolio
    descrip={"Nuestras Obras"}
    titulo={"Laboratorio Celnova"}
     />   
    <br />

    <LayoutsGaleria
    children={<GaleriaImgComponent tittle="Celnova" value={100}      />}

    
    titulo={"Laboratorio Celnova"}
    subtitulo={"Laboratorio Celnova"}
    descrip={"instalación de revestimientos en Pisos de spc listones de PVC"}
    titulo1={"Pisos"}
    descrip1={"instalación de revestimientos en Pisos de spc listones de PVC"}
    titulo2={"Caracteristicas"}
    descrip2={"Revestimiento de PVC homogéneo, de alto rendimiento, permite la construcción de áreas limpias según normas GMP Clase A"}
    titulo3={"Descripción"}
    descrip3={"Rollos de 2 m de ancho y 2 mm de espesor Innovador diseño no direccional y policromo, disponible en 24 colores"}
    />   
       
   </>
  )
}
