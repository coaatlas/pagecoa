import { addHours } from 'date-fns';
import React from 'react'
import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom'
import Pdf from "react-to-pdf";
import { FabAddPdf } from './FabAddPdf';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const ref = React.createRef();

export const PresupuestoContenido = () => {


  return (


   <>

   <Pdf targetRef={ref} filename="Presupuesto.pdf">
        {({ toPdf }) => <button       className="btn btn-primary fabb" onClick={toPdf}>Generar PDF</button>}
        </Pdf>



<div ref = {ref} >
     <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
          <div className="row justify-content-center">


   
        <h3> Nuevo Asiento </h3>
        <hr />
        <form className="container" >

            <div className="form-group mb-2">
                <label>Fecha y hora inicio</label>
                <DatePicker

                    className="form-control"
                    dateFormat="Pp"
                    showTimeSelect
                    locale="es"
                    timeCaption="Hora"
                    Style={ { width: '60%',
                    height: '100%',
                 }   }

                  
                    

                


                />
            </div>

            <div className="form-group mb-2">
                <label>Fecha y hora fin</label>
                <DatePicker
               
                    
                    className="form-control"
                    dateFormat="Pp"
                    showTimeSelect
                    locale="es"
                    timeCaption="Hora"
                />
            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Nombre Asiento</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Título "
                    name="title"
                    autoComplete="off"
              
                   
                />
                <small id="emailHelp" className="form-text text-muted">Descripción</small>
            </div>

            <div className="form-group mb-2">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                 
                 
                ></textarea>
               
            </div>

            <div className="form-group mb-2">
                <label>Monto</label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Monto"
                    name="amount"
                    autoComplete="off"
                
                
                />
           
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

            <button
                type="button"
                className="btn-close "
             
            >
                <i className="far fa-window-close"></i>
               
            </button>

        </form>
  



          </div>
      </div>
  </div>
  </div>

 
   </>
  )
}
