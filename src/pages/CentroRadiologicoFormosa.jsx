import React from 'react'
import { BannerPortfolio } from '../ui'
import { GaleriaImgComponent } from '../components/galeria/galeriaimg/GaleriaImgComponent'
import { LayoutsGaleria } from '../components/galeria/layoutgaleria/LayoutsGaleria'

export const CentroRadiologicoFormosa = () => {
  return (
    <>
    <BannerPortfolio
    descrip={"Nuestras Obras"}
    titulo={"Centro Radiologico Formosa"} 
     />   
    <br />

    <LayoutsGaleria
    children={<GaleriaImgComponent tittle="centroradiologicoformosa" value={100}      />}

    
    titulo={"Centro Radiologico Formosa"}
    subtitulo={"Centro Radiologico Formosa"}
    descrip={"instalación de revestimientos en pisos con PVC amstrong en rollo"}
    titulo1={"Pisos"}
    descrip1={"instalación de revestimientos en pisos con PVC amstrong en rollo "}
    titulo2={"Caracteristicas"}
    descrip2={"Revestimiento de PVC homogéneo, de alto rendimiento, permite la construcción de áreas limpias según normas GMP Clase A"}
    titulo3={"Paredes"}
    descrip3={"Ploteados de paredes con vinilo impreso"}
    />   
       
   </>
  )
}
