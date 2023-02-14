import React from 'react'
import { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useClientStore, useProductoStore, useUiStore } from '../../hooks'
import { FabAddProduc } from './FabAddProduc'
import { ProductModal } from './ProductModal'


export const ProductosComponent = () => {
    const { openDateModal } = useUiStore();   
   const {  productos ,startLoadingProductos,startDeletingProducto,setActiveProducto}=useProductoStore()

    const handleEdit = (item) => {     
        setActiveProducto(item)
        openDateModal();       
    }

    const handleDelete = (item) => {
        setActiveProducto(item) 
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
                startDeletingProducto(item.id);
                Swal.fire(
                    'Borrado!',
                    'El producto ha sido borrado.',
                    'success'
                )
            }
        })    
    }

   useEffect(() => {
        startLoadingProductos()
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
                            <th colSpan="7" scope="col">Productos</th>
                           </tr>
                        <tr>                     
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio $ARG</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Categoria</th>                     
                        <td  colSpan="2" >                            
                        </td>
                        </tr>
                    </thead>
                    <tbody>                       
                      {
                           ( 
                            (productos.length === 0) )  
                            ? <tr>
                                <td colSpan="7" className="text-center">No hay productos</td>
                                 </tr>

                            : productos.map(item => (
                                    <tr key={item.id} >                                                           
                                        <td>{item.nombre}</td>
                                        <td><td style={{border: 'none',color:'green'}}>&#65284;</td><td style={{border: 'none',color:'red'}}>{item.precio}</td></td>
                                        <td>{item.descripcion}</td>
                                        <td>{item.categoria}</td>                                      
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
  <FabAddProduc />
  <ProductModal />    
    </>
  )
}
