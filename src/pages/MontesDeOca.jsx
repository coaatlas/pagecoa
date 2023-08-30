
import React from 'react'

import { GaleriaImgComponent } from '../components/galeria/galeriaimg/GaleriaImgComponent'
import { LayoutsGaleria } from '../components/galeria/layoutgaleria/LayoutsGaleria'
import { BannerPortfolio } from '../ui'



export const MontesDeOca = () => {
  return (
    <>
    <BannerPortfolio
    descrip={"Nuestras Obras"} 
    titulo={"Poder Judicial Montes de Oca"}
    />   
    <br />

    <LayoutsGaleria
    children={<GaleriaImgComponent tittle="montesdeoca" value={100}      />}

    
    titulo={"Poder Judicial Montes de Oca"}
    subtitulo={"Poder Judicial Montes de Oca"}
    descrip={"instalación de revestimientos en pisos con revestimiento de baldosas vinilicos"}
    titulo1={"Pisos"}
    descrip1={"instalación de revestimientos en pisos con revestimiento de vinilicos"}
    titulo2={"Caracteristicas"}
    descrip2={"Revestimiento de PVC homogéneo, de alto rendimiento, permite la construcción de áreas limpias según normas GMP Clase A"}
    titulo3={"Descripción"}
    descrip3={"Rollos de 2 m de ancho y 2 mm de espesor Innovador diseño no direccional y policromo, disponible en 24 colores"}
    />      
   </>
  )
}
