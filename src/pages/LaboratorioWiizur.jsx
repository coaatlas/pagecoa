import React from 'react'

import { GaleriaImgComponent } from '../components/galeria/galeriaimg/GaleriaImgComponent'
import { LayoutsGaleria } from '../components/galeria/layoutgaleria/LayoutsGaleria'
import { BannerPortfolio } from '../ui'



export const LaboratorioWiizur = () => {
    return (
        <>
        <BannerPortfolio
        descrip={"Nuestras Obras"}
        titulo={"Laboratorio Weizur"}
         />   
        <br />
    
        <LayoutsGaleria
        children={<GaleriaImgComponent tittle="weizur" value={100}      />}
        
        titulo={"Laboratorio Weizur"}
        subtitulo={"Laboratorio Weizur"}
        descrip={"instalación de revestimientos en pisos con revestimiento de listones de PVC y revestimiento de vinilicos en rollos de PVC"}
        titulo1={"Pisos"}
        descrip1={"instalación de revestimientos en pisos con revestimiento de vinilicos"}
        titulo2={"Caracteristicas"}
        descrip2={"Revestimiento de PVC homogéneo, de alto rendimiento, permite la construcción de áreas limpias según normas GMP Clase A"}
        titulo3={"Descripción"}
        descrip3={"Revestimiento de PVC homogéneo, de alto rendimiento, permite la construcción de áreas limpias según normas GMP Clase A"}
        />         
       </>
      )
    }
    