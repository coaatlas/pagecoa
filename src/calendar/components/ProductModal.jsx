import React, { useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal'
import Swal from 'sweetalert2';
import { useProductoStore, useUiStore } from '../../hooks';
import './modal.css'

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



export const ProductModal = () => {

    const { isDateModalOpen ,closeDateModal }=useUiStore ();
    const{ activeProducto, startSavingProducto }= useProductoStore();
   

    const [formValues, setFormValues] = useState({
        id: '',
        nombre: '',
        precio: '',
        descripcion: '',
        categoria: ''    
    });

    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }


    const [formSubmit, setFormSubmit] = useState(false)

//==============================================================
    const inputnomnbreClass=  useMemo(() => {
        if (!formSubmit) return '';
        return (formValues.nombre.trim().length <= 0) ? 'is-invalid' : 'is-valid';    
            }, [formSubmit, formValues])

    const inputPrecioClass=  useMemo(() => {
        if (!formSubmit) return '';        
        return (formValues.precio.trim().length <= 0  ) ? 'is-invalid' : 'is-valid';    
            }, [formSubmit, formValues])

    const inputDescripcionClass=  useMemo(() => {
        if (!formSubmit) return '';
        return (formValues.descripcion.trim().length <= 0 ) ? 'is-invalid' : 'is-valid';
            }, [formSubmit, formValues])

    const inputCategoriaClass=  useMemo(() => {
                if (!formSubmit) return '';

        return (formValues.categoria.trim().length <= 0 ) ? 'is-invalid' : 'is-valid';
            }, [formSubmit, formValues])


//==============================================================   

useEffect (() => {
    if (activeProducto !== null) {
        setFormValues({...activeProducto})
    }
}, [activeProducto])




//==============================================================

    const onSumbitForm = async (e) => {
        e.preventDefault();
        setFormSubmit(true);

        if (formValues.nombre.trim().length <= 0 || 
            formValues.precio.trim().length <= 0 ||           
            formValues.descripcion.trim().length <= 0 ||
            formValues.categoria.trim().length <= 0 ) {
            Swal .fire('Error', 'Todos los campos son obligatorios', 'error');
            return;
        }

        await startSavingProducto(formValues);  
       closeDateModal();
       setFormSubmit(false);
        }
//==============================================================

const onCloseModal = () => {
    closeDateModal();
    setFormSubmit(false); 
}



  return (
   <Modal
   isOpen={ isDateModalOpen }
   onRequestClose={ onCloseModal }
   style={ customStyles }
   className="modal"
   overlayClassName="modal-fondo"
   closeTimeoutMS={ 200 }
   >

    <h4>Agregar producto</h4>

    <hr />

    <form className="container" onSubmit={ onSumbitForm }>
        <div className="form-group">
            <label>Nombre</label>
            <input 
                type="text"
                className={ `form-control ${ inputnomnbreClass }` }
                placeholder="Nombre"
                name="nombre"
                autoComplete="off" 
                value={ formValues.nombre } 
                onChange={ onInputChanged }    

            />
        </div>
        <br />

        <div className="form-group">
            <label>Precio</label>
            <input
                type="text"
                className={ `form-control ${ inputPrecioClass }` }
                placeholder="Precio"
                name="precio"
                autoComplete="off" 
                value={ formValues.precio }
                onChange={ onInputChanged } 

            />
        </div>
        <br />
        <div className="form-group">
            <label>Descripcion</label>
            <input
                type="text"
                className={ `form-control ${    inputDescripcionClass }` }
                placeholder="Descripcion"
                name="descripcion"
                autoComplete="off"
                value={ formValues.descripcion }
                onChange={ onInputChanged }
            />

        </div>
      
        <div className="form-group">
            <label>Categoria</label>
            <input
                type="text"
                className={ `form-control ${ inputCategoriaClass }` }
                placeholder="Categoria"
                name="categoria"
                autoComplete="off"
                value={ formValues.categoria }
                onChange={ onInputChanged }
            />
        </div>      
        <hr />
        <button
            type="submit"
            className="btn btn-outline-primary btn-block"
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
