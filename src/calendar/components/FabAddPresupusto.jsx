
import React from 'react'
import {   usePresupuestosStore, useProductoStore, useUiStore } from '../../hooks'

import './fabaddnew.css'



export const FabAddPresupuesto = () => {

    const { openDateModal } = useUiStore(); 
   const {setActivePresupuesto}=usePresupuestosStore();

    const handleClickNew = () => {  
          
      setActivePresupuesto({
    
        pedido: [
          {
              nombre: '',
              precio: '',
            }
      ],
      total: '',
      cliente: '' ,
      cantidad: '',
      empresa: [
          {
              nombre: '',
              empresa: '',
          }
      ],
      
         
    
    })
          
          openDateModal();
    }

  return (
    <button
        className="btn btn-primary fabb"
        onClick={ handleClickNew } >
    </button>
  )
}