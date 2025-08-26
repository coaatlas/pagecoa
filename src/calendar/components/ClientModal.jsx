import React, { useMemo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal'
import Swal from 'sweetalert2';
import { useClientStore, useUiStore } from '../../hooks';
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



export const ClientModal = () => {

    const { isDateModalOpen ,closeDateModal }=useUiStore ();

    const {activeCliente, startSavingCliente}=useClientStore();

    const [formValues, setFormValues] = useState({
        id: '',
        nombre: '',
        apellido: '',
        empresa: '',
        telefono: '',
        email: '',
    
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

    const inputapellidoClass=  useMemo(() => {
        if (!formSubmit) return '';        
        return (formValues.apellido.trim().length <= 0  ) ? 'is-invalid' : 'is-valid';    
            }, [formSubmit, formValues])

    const inputempresaClass=  useMemo(() => {
        if (!formSubmit) return '';
        return (formValues.empresa.trim().length <= 0 ) ? 'is-invalid' : 'is-valid';
            }, [formSubmit, formValues])

    const inputtelefonoClass=  useMemo(() => {
                if (!formSubmit) return '';

        return (formValues.telefono.trim().length <= 0 ) ? 'is-invalid' : 'is-valid';
            }, [formSubmit, formValues])

    const inputemailClass=  useMemo(() => {
        if (!formSubmit) return '';
        return (formValues.email.trim().length <= 0 ) ? 'is-invalid' : 'is-valid';
            }, [formSubmit, formValues])
//==============================================================   

useEffect (() => {
    if (activeCliente !== null) {
        setFormValues({...activeCliente});
    }
}, [activeCliente])



//==============================================================

    const onSumbitForm = async (e) => {
        e.preventDefault();
        setFormSubmit(true);

        if (formValues.nombre.trim().length <= 0 || 
            formValues.apellido.trim().length <= 0 ||
            formValues.empresa.trim().length <= 0 ||
            formValues.telefono.trim().length <= 0 ||
            formValues.email.trim().length <= 0) {
            Swal .fire('Error', 'Todos los campos son obligatorios', 'error');
            return;
        }
      
       await startSavingCliente(formValues);
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

    <h4>Agregar Cliente</h4>

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
            <label>Apellido</label>
            <input
                type="text"
                className={ `form-control ${ inputapellidoClass }` }
                placeholder="Apellido"
                name="apellido"
                autoComplete="off" 
                value={ formValues.apellido }
                onChange={ onInputChanged } 

            />
        </div>
        <br />
        <div className="form-group">
            <label>Empresa</label>
            <input
                type="text"
                className={ `form-control ${ inputempresaClass }` }
                placeholder="Empresa"
                name="empresa"
                autoComplete="off"
                value={ formValues.empresa }
                onChange={ onInputChanged }
            />

        </div>
      
        <div className="form-group">
            <label>Telefono</label>
            <input
                type="text"
                className={ `form-control ${ inputtelefonoClass }` }
                placeholder="Telefono"
                name="telefono"
                autoComplete="off"
                value={ formValues.telefono }
                onChange={ onInputChanged }
            />
        </div>
        <div className="form-group">

            <label>Email</label>
            <input
                type="text"
                className={ `form-control ${ inputemailClass }` }
                placeholder="Email"
                name="email"
                autoComplete="off"
                value={ formValues.email }
                onChange={ onInputChanged }
            />

        </div>
      
        <hr />
        <button
            type="submit"
            className="btn btn-outline-primary btn-block"
            onClick={ onSumbitForm }
        >
            <i className="far fa-save"></i>
            <span> Guardar</span>
        </button>

        <button
            type="button"
            className="btn-close "
            onClick={ onCloseModal }
        >
            <i className="far fa-window-close"></i>
        </button>
        </form>
   </Modal>
  )
}
