import React from 'react'
import { NuevoPresupuesto } from './NuevoPresupuesto'
import { PresupuestoContenido } from './PresupuestoContenido'
import { PresupuestoNavBar } from './PresupuestoNavBar'



export const PresupuestoComponent = () => {

  
  return (
     <>  
        <PresupuestoNavBar  />
        <NuevoPresupuesto />
    </>
  )
}
