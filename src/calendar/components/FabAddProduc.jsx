
import React from 'react'
import {   useProductoStore, useUiStore } from '../../hooks'

import './fabaddnew.css'



export const FabAddProduc = () => {

    const { openDateModal } = useUiStore(); 
    const{setActiveProducto  }=useProductoStore();

    const handleClickNew = () => {  
          
          setActiveProducto({
              id: '',
              nombre: '',
              precio: '',
              descripcion: '',
              categoria: '' ,
              user : {
                  _id : '',
                  name : ''
              }
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