
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import Pdf from "react-to-pdf";
import {  usePresupuestosStore, useUiStorePdf} from '../../hooks';
import { ClienteEmpresaResumen } from './ClienteEmpresaResumen';
import { FooterPresupuestos } from './FooterPresupuestos';
import './modal.css'

const ref = React.createRef();

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



export const PresupuestotModalPdf = () => {

    
    const{presupuestos ,  activePresupuesto,startLoadingPresupuestos,  startSavingPresupuesto,  }=usePresupuestosStore();

    const{ isDateModalOpenPdf, closeDateModalPdf }=useUiStorePdf();

    //fecha y hora actual
  const fecha = new Date();
  const hoy = fecha.getDate();
  const mesActual = fecha.getMonth() + 1; 
  const year = fecha.getFullYear();
const fechaActual = `${hoy}/${mesActual}/${year}`
  

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

 


    const [formSubmit, setFormSubmit] = useState(false)

//==============================================================
   


useEffect (() => {
    if (activePresupuesto !== null) {
        setFormValues({...activePresupuesto})
    }
}, [activePresupuesto])




//==============================================================

//==============================================================

const onCloseModalPdf = () => {
    closeDateModalPdf();
  
    setFormSubmit(false); 
}

//==============================================================

let n = 0;
let num =  formValues.pedido.map (pedido => pedido.precio)

let totalsuma = num.reduce((a, b) => a + b, 0);


const total = formValues.pedido.map (pedido => pedido.precio[0]) + 
formValues.pedido.map (pedido => pedido.precio[1]) ;

useEffect(() => {
    startLoadingPresupuestos();
}, [startLoadingPresupuestos])




//==============================================================
  return (
    <>   
    
   <Modal
   isOpen={ isDateModalOpenPdf }
   onRequestClose={ onCloseModalPdf }
   style={ customStyles }
   className="modal"
   overlayClassName="modal-fondo"
   closeTimeoutMS={ 200 }
   ><div  id="scroll">
   

    <form className="container"  ref = {ref}>
    <h6> <span> { fechaActual }</span><br/>Presupuesto para  - 

   
    
    </h6>
      
   
    
    <hr />
        <div className="form-group"   >
            <label 
            style={{ 
            textAlign: 'left' ,
            color: 'black' ,
            fontWeight: 'bold' ,
            fontSize: '20px' }}>Productos</label>          

        </div>
        <br />
        <div  id="scroll-1">
        <div className="form-group">            
            { 
                formValues.pedido.map( pedido => (
                    <p key={ n++ }> N° { n + 1 } : { pedido.nombre } - $  { pedido.precio } <sup>(el m<sup>2</sup>)</sup></p>
                ))
            }    
             <p style={{
            textAlign: 'left' ,
            color: 'black' ,
           
            fontSize: '10px' }}>* valor del m<sup>2</sup>  </p>        
        </div>
      
      
        <hr />
        <p style={{
            textAlign: 'left' ,
            color: 'black' ,
            fontWeight: 'bold' ,
            fontSize: '16px' }}>Presupuestado : {formValues.cantidad}<sup>(mts<sup>2</sup>)</sup></p>
            <p style={{
            textAlign: 'left' ,
            color: 'black' ,
           
            fontSize: '10px' }}>* Cantidad de mts<sup>2</sup> presupuestados  </p>
        <hr />
        <div className="form-group">
            <label>Total</label>
            <p> $  {totalsuma}   <sup>( x mt<sup>2</sup>) (sin IVA) </sup>  </p>
            <p> $ { totalsuma  *  formValues.cantidad }   <sup> (sin IVA)</sup> presupuestados<sup>( {formValues.cantidad} mts<sup>2</sup>)</sup>  </p>
            <p> $ { totalsuma   * formValues.cantidad * 1.21 }   <sup> (IVA 21%)</sup> presupuestados<sup>( {formValues.cantidad} mts<sup>2</sup>)</sup>  </p>
       </div>           
        <hr />
        <FooterPresupuestos />
        </div>
       
     
      
 

 
        </form>
        <button
            type="button"
            className="btn-close "
            onClick={ onCloseModalPdf }  >
            <i className="far fa-window-close"></i>
        </button>

        </ div>
        <Pdf targetRef={ref} filename="Presupuesto.pdf"
        options={{          
            format: [14,8] ,
            unit: 'in',          
            orientation: 'portrait',    
            html2canvas: { scale: 1 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
          
              }}      
        >


 {({ toPdf }) => <button  className="btn btn-primary fabbpdf" onClick={toPdf}></button>}
 </Pdf>
   </Modal>
  
    </>
  )
}
