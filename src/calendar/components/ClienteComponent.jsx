import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useUiStore ,useClientStore } from '../../hooks'

import { ClientModal } from './ClientModal'
import { FabAddClient } from './FabAddClient'
import './tabla.css'

export const ClienteComponent = () => {

   const { openDateModal } = useUiStore();   
   const {clientes, deleteCliente,startLoadingClientes,setActiveCliente,startSavingCliente}=useClientStore();


const handleEdit =  (clientes) => {   
    setActiveCliente(clientes);
    openDateModal();  
}

const handleDelete = async (clientes) => {
    setActiveCliente(clientes);
    Swal.fire({
        title: '¿Estas seguro?',
        text: "No podras revertir esta accion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrarlo!',
       
      }).then((result) => {
        if (result.isConfirmed) {
            deleteCliente(clientes.id);   
        
          Swal.fire(
            'Borrado!',
            'El cliente ha sido borrado.',
            'success'
            
          )    
         
        } }  
      
      )}

useEffect(() => {
    startLoadingClientes();
}, [])




  return (
    <>
<div className="container-l py-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
          <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10 ">
                <table className="table table-bordered table-responsive  responsivegene">                
                    <thead
                        className="table-dark text-center">
                        < tr  rowSpan="4">
                            <th colSpan="7" scope="col">Clientes</th>
                           </tr>
                        <tr>                     
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Empresa</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Email</th>
                        <td  colSpan="2" >                            
                        </td>
                        </tr>
                    </thead>
                    <tbody>
                       
                      {
                           ( 
                            (clientes.length === 0) )  
                            ?                    
                                <tr>
                                    <td colSpan="7" className="text-center">No hay clientes</td>
                                </tr>
                            :clientes.map(item => (
                                    <tr key={item.id} >                                                           
                                        <td>{item.nombre}</td>
                                        <td>{item.apellido}</td>
                                        <td>{item.empresa}</td>
                                        <td>{item.telefono}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <span 
                                            type="button"
                                            style={{cursor: 'pointer', color: 'green' }}
                                            onClick={() => handleEdit(item)}><i className="fas fa-light fa-edit"></i></span>
                                        </td>
                                        <td>
                                            <span
                                            type="button"
                                            style={{cursor: 'pointer', color: 'red' }}
                                            onClick={() => handleDelete(item)}    
                                            ><i className="fas fa-light fa-trash"></i></span>    
                                        </td>
                                    </tr> 
                                ))
                            }                                     
                        </tbody>
                </table>
            </div>
          </div>
      </div>
  </div>   

  <ClientModal />
  <FabAddClient />
    
    </>
  )
}
