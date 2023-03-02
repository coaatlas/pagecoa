import React, { useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal'
import Swal from 'sweetalert2';
import { useClientStore, usePresupuestosStore, useProductoStore, useUiStore } from '../../hooks';
import './modal.css'
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const PresupuestotModal = () => {

    const { isDateModalOpen ,closeDateModal }=useUiStore ();
    const{ productos , startLoadingProductos }= useProductoStore();
    const{clientes, startLoadingClientes  }= useClientStore();
    const{ activePresupuesto, startSavingPresupuesto,  }=usePresupuestosStore();


    useEffect(() => {
        startLoadingClientes();
    }, [])

    useEffect(() => {
        startLoadingProductos();
    }, [])
    

    const [formValues, setFormValues] = useState({   
        pedido: [
            {
                nombre: '' ,
                precio: 0,
              }
        ],
        total: '',
        cantidad: '',
        empresa: [
            {
                nombre: '',
                empresa: '',
            }
        ]
    
    });

   

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })       

    }

    const [formSubmit, setFormSubmit] = useState(false)

//==============================================================   

useEffect (() => {
    if (activePresupuesto !== null) {
        setFormValues({...activePresupuesto})
    }
}, [activePresupuesto])

//==============================================================

    const onSumbitForm = async (e) => {
        e.preventDefault();
        setFormSubmit(true);      

        await startSavingPresupuesto(formValues);
        Swal.fire('Guardado', 'Presupuesto guardado', 'success');
        setFormSubmit(false);
        closeDateModal(); 

        }
//==============================================================

const onCloseModal = () => {
    closeDateModal();
    setFormSubmit(false); 
}

//==============================================================

let n = 1;     

      if (formValues.pedido.length > 0) {
        n = formValues.pedido.map( pedido => pedido.precio).reduce((a, b) => a + b);
        }
        else {
            n = 0;
        }

        const total = n ;      

           useEffect(() => {
            setFormValues({
                ...formValues,
                total: total  
            })
              }, [total])
//==============================================================

     const [cantidad, setCantidad] = useState(0);

      useEffect(() => {
       //console.log(cantidad);
         }, [cantidad])  

        const onInputChangedCantidad = ({ target }) => {
         setCantidad(target.value)
                    setFormValues({
             ...formValues,
           cantidad: target.value
         })
       }
 
    //==============================================================        
            
      const [pedido, setPedido] =useState('');          

      useEffect(() => {
        //console.log(pedido);
      }, [pedido])

      const seleccionarp= prod => {
       setFormValues({
              ...formValues,              
                pedido: prod 
            })   
        }   

//==============================================================
        const [empresa ,setEmpresa] = useState('');      

          useEffect(() => {
           //console.log(empresa);         
           }, [empresa])

            const seleccienarc= e => {        

            setFormValues({
                ...formValues,
                empresa: e
            })             
                }

//==============================================================

                const animatedComponents = makeAnimated();

//==============================================================
  return (
   <Modal
   isOpen={ isDateModalOpen }
   onRequestClose={ onCloseModal }
   style={ customStyles }
   className="modal"
   overlayClassName="modal-fondo"
   closeTimeoutMS={ 200 }
   >
    <h4>Agregar Presupuesto</h4>
    <hr />

    <form className="container" onSubmit={ onSumbitForm } >
    <div className="form-group">
            <label>Cliente</label>            

               <Select
            options={ clientes }
            isMulti
            getOptionLabel={(option) => option.nombre}
            getOptionValue={(option) => option.id}
            onChange={ (e) => seleccienarc(e) }
            components={animatedComponents}            
            menuShouldScrollIntoView={true}
            />         
        </div>      
        <hr />  
        <div className="form-group">
            <label>Cantidad <sup>(x m<sup>2</sup>)</sup> a Presupuestar</label>
            <input
                type="text"
                className="form-control"
                autoComplete="off"                             
                name="cantidad"                   
                placeholder="Cantidad"
                value={ formValues.cantidad }
                onChange={ onInputChangedCantidad }

            />   
        </div> 
        <hr />  
        <div className="form-group">
            <label >Producto</label>          
            <Select
            options={ productos }         
            isMulti
            getOptionLabel={(option) =>option .nombre  }           
            getOptionValue={(option) => option.id}
            onChange={ (e) => seleccionarp(e) }      
            components={animatedComponents}              
            />  
              </div>           
        <br />         
        <div className="form-group"  id='scroll-2'>
            <label>Precio</label>          
             
            { 
                formValues.pedido.map( pedido => (
                    <p key={ n++ }
                    style={{ color: 'red' ,
                    fontSize: '0.8rem'}} >
                        { pedido.nombre } :$  { pedido.precio }</p>
                ))
            }  
            <p
            style={{ color: 'green' ,
            fontSize: '0.8rem'}} >

            Total: { formValues.total}</p>        
        </div>  
       <hr />
     
        <button
            type="submit"
            className="btn btn-outline-primary btn-block btn-guardar "
            onClick={ onSumbitForm } >
            <i className="far fa-save"></i>
            <span> Guardar</span>
        </button>

        <button
            type="button"
            className="btn-close "
            onClick={ onCloseModal } >
            <i className="far fa-window-close"></i>
        </button>
       
        </form>
        
   </Modal>
  )
}
