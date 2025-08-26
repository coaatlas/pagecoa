import React from 'react'

import { GaleriaImgComponent } from '../components/galeria/galeriaimg/GaleriaImgComponent'

import { LayoutsGaleria } from '../components/galeria/layoutgaleria/LayoutsGaleria'
import { BannerPortfolio } from '../ui'

export const UnileverTortuguitas = () => {

  
  return (
    <>
    <BannerPortfolio 
    descrip={"Nuestras Obras"} 
    titulo={"Unilever Tortuguitas"}
    />   
    <br /> 

    <LayoutsGaleria 
    children={<GaleriaImgComponent tittle="Unilever" value={100} />}
    titulo={"Unilever Tortuguitas"}
    subtitulo={"Unilever Tortuguitas"}
    descrip={"instalación de revestimientos en pisos con PVC de Forbo"}
    titulo1={"Pisos"}
    descrip1={"instalación de revestimientos en pisos con revestimiento de vinilicos de pvc de forbo"}
    titulo2={"Caracteristicas"}
    descrip2={"Revestimiento de PVC homogéneo, de alto rendimiento, permite la construcción de áreas limpias según normas GMP Clase A"}
    titulo3={"Descripción"}
    descrip3={"Rollos de  2 mm de espesor Innovador diseño no direccional y policromo, disponible en varios colores"}
    />   
       
   </>
  )
}
