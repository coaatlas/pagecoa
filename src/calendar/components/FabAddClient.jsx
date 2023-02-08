
import React from 'react'
import {  useClientStore, useUiStore } from '../../hooks'

import './fabaddnew.css'



export const FabAddClient = () => {

    const { openDateModal } = useUiStore();
  
    const {setActiveCliente}=useClientStore();

    const handleClickNew = () => { 

        setActiveCliente({
           
            nombre: '',
            apellido: '',
            empresa: '',
            telefono: '',
            email: '',
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
        onClick={ handleClickNew }
    >
    </button>
  )
}