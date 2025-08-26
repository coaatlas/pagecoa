
import React, { useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import Pdf from "react-to-pdf";
import {  usePresupuestosStore, useUiStorePdf} from '../../hooks';
import { onSetActivePresupuesto } from '../../store';
import { ClienteEmpresaResumen } from './ClienteEmpresaResumen';
import { FooterPresupuestos } from './FooterPresupuestos';
import './modal-pdf.css'
import { exportComponentAsPNG } from 'react-component-export-image';


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
   
    const{presupuestos ,  activePresupuesto,startLoadingPresupuestos,  setActivePresupuesto  }=usePresupuestosStore();
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
                telefono: '',
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

let h = 0;


console.log(formValues.empresa.map(empresa => empresa.nombre)
    );

//==============================================================


   

const componentRef = useRef();
  return (
    <>   
    
   <Modal
   isOpen={ isDateModalOpenPdf }
   onRequestClose={ onCloseModalPdf }
   style={ customStyles }
   className="modal"
   overlayClassName="modal-fondo"
   closeTimeoutMS={ 200 }
   >
        
    <div   >
        <form className="container" ref={componentRef}  >
        <hr 
    style={{
        color: 'black',
        backgroundColor: 'black',
        height: 3,
        borderColor : 'black',
        zIndex: '1000',
    }}
    />
        <dib > 
            <h6>Coa - Revestimientos     <br />
          <span
            style={{
                fontSize: '11px',
                color: 'black',
                fontWeight: 'bold',
                textAlign: 'left',
            }}
          >Tel:  11-3313-8900 / 11-3324-9832 </span>
            <br />  
            <a href="mailto:cubas_beto@hotmail.com">cubas_beto@hotmail.com</a> </h6>
           </dib> 

            <div className="form-group"   style={{
      marginTop: '-40px',
      marginRight: '20px',
    }}
  >
    <h6
    style={{
    
        textAlign: 'right' ,
        color: 'black' ,
        fontWeight: 'bold' ,
        fontSize: '10px'
    }}
    > Fecha Presupuesto  <span> : { fechaActual }</span>  </h6>
  
   </div>


   <div className="form-group"
  style={{
  
    marginRight: '20px',
  }}
   >

   <h6
    style={{
        textAlign: 'right' ,
        color: 'black' , 
        fontWeight: 'bold' ,
        fontSize: '10px'
    }}
    > Empresa <span> : { formValues.empresa.map(empresa => empresa.empresa) }</span>  </h6>
   

   </div>
     <hr 
    style={{
        color: 'black',
        backgroundColor: 'black',
        height: 3,
        borderColor : 'black',
        zIndex: '1000',
     
    }}
    />
        <div className="form-group"   >
            <label 
            style={{ 
            textAlign: 'left' ,
            color: 'black' ,
            fontWeight: 'bold' ,
            fontSize: '20px' }}>Productos Cotizados</label>  
              </div>      
        <div  >
        <div className="form-group">            
            { 
                formValues.pedido.map( pedido => (
                    <p className="contenido"              

                     key={ n++ }> <span
                        style={{
                            color: 'black' ,
                            fontWeight: 'bold' ,
                            fontSize: '12px' }}>N° { n + 1 }</span> : { pedido.nombre } - $  { pedido.precio } <sup>(el m<sup>2</sup>)</sup>

                            <hr 
                            style={{
                                color: 'black',
                                backgroundColor: 'black',
                                height: 1,
                                borderColor : 'black',
                                zIndex: '1000',
                                marginTop: '0px',
                                marginBottom: '-5px',
                            }}
                            />
                            </p>                  
                ))
            }    
             <p style={{
            textAlign: 'left' ,
            color: 'black' ,
           
            fontSize: '10px' }}>* valor del m<sup>2</sup>  </p>        
        </div>  
           <hr 
    style={{
        color: 'black',
        backgroundColor: 'black',
        height: 3,
        borderColor : 'black',
        zIndex: '1000',
     
    }}
    />
        <p style={{
            textAlign: 'left' ,
            color: 'black' ,
            fontWeight: 'bold' ,
            fontSize: '16px' }}>Metros Presupuestado : {formValues.cantidad}<sup>(mts<sup>2</sup>)</sup></p>
            <p style={{
            textAlign: 'left' ,
            color: 'black' ,
           
            fontSize: '10px' }}>* Cantidad de mts<sup>2</sup> presupuestados  </p>
         <hr 
    style={{
        color: 'black',
        backgroundColor: 'black',
        height: 3,
        borderColor : 'black',
        zIndex: '1000',
     
    }}
    />
        <div className="form-group">
            <label
            style={{
                textAlign: 'left' ,
                color: 'black' ,
                fontWeight: 'bold' ,
                fontSize: '20px' }}>Total</label>
            <p className="contenido"> $  {totalsuma}   <sup>( x mt<sup>2</sup>) (sin IVA) </sup>  </p>
            <p className="contenido"> $ { totalsuma  *  formValues.cantidad }   <sup> (sin IVA)</sup> presupuestados<sup>( {formValues.cantidad} mts<sup>2</sup>)</sup>  </p>
            <p className="contenido"> $ { totalsuma   * formValues.cantidad * 1.21 }   <sup> (IVA 21%)</sup> presupuestados<sup>( {formValues.cantidad} mts<sup>2</sup>)</sup>  </p>
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
        </div>
    <button  className="btn btn-primary fabbpdf" onClick={ () =>  exportComponentAsPNG(componentRef, {
        fileName: "presupuesto",
        backgroundColor: "white",
        html2CanvasOptions: {
            scale:2,       
            useCORS: true,
            allowTaint: true,
            logging: true,
            width: 500,
            height: 900,
            x: 0,
            y: 0,
            scrollX: 0,
            scrollY: -window.scrollY,
            windowWidth: 500,
            windowHeight: 900,
            backgroundColor: "white",
            imageTimeout: 15000,  
           } ,
         }) } >
     </button>
     </Modal>
      
    </>
  )
}



