import React from 'react'

import { GaleriaImgComponent } from '../components/galeria/galeriaimg/GaleriaImgComponent'
import { LayoutsGaleria } from '../components/galeria/layoutgaleria/LayoutsGaleria'
import { BannerPortfolio } from '../ui'



export const ClinicaViedma = () => {


    return (
        <>
        <BannerPortfolio
        descrip={"Nuestras Obras"}
        titulo={"Clinica Viedma"}
        />   
        <br />
    
        <LayoutsGaleria
        children={<GaleriaImgComponent tittle="clinicaViedma" value={100} />}

        titulo={"Clinica Viedma"}
        subtitulo={"Clinica Viedma"}
        descrip={"instalación de Tarkett PVC en rollo"}
        titulo1={"Pisos"}
        descrip1={"instalación de Tarkett PVC en rollo"}
        titulo2={"Caracteristicas"}
        descrip2={"Revestimiento de Tarkett PVC en rollo, de alto rendimiento, permite la construcción de áreas limpias"}
        titulo3={"Descripción"}
        descrip3={"Rollos de Tarkett PVC en rollo"}
        />   
          
       </>
      )
    }
    