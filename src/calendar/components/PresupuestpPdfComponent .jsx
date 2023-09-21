import React, { useEffect, useRef, useState } from 'react'
import { exportComponentAsPDF , exportComponentAsPNG} from 'react-component-export-image';
import {  usePresupuestosStore, useUiStorePdf} from '../../hooks';
import { FooterPresupuestos } from './FooterPresupuestos';
import { useLocation } from 'react-router-dom';
import './fabaddnewPdf.css';
import { LogoHtmlCss } from './logo/LogoHtmlCss';




const ref = React.createRef();

export const PresupuestpPdfComponent  = (props) => {   

  const router = useLocation();

    const { pathname } = router;
    const path = pathname.split('/');
    const id = path[2];
    const nombre = path[3]; 



    const componentRef = useRef();
    const{presupuestos ,  activePresupuesto,startLoadingPresupuestos,  setActivePresupuesto  }=usePresupuestosStore();
   

        //fecha y hora actual
      const fecha = new Date();
      const hoy = fecha.getDate();
      const mesActual = fecha.getMonth() + 1; 
      const year = fecha.getFullYear();
      const fechaActual = `${hoy}/${mesActual}/${year}`;

     //hora actual
      const hora = fecha.getHours();
      const minutos = fecha.getMinutes();
      const horaActual = `${hora}:${minutos}`


useEffect(() => {
    startLoadingPresupuestos( id );
}, [startLoadingPresupuestos, id])

presupuestos.forEach( presupuesto => {
    if (presupuesto.id === id) {

        const pedido = presupuesto.pedido;   
    }
})

const presupuesto = presupuestos.find( presupuesto => presupuesto.id === id);

useEffect(() => {
    if (presupuesto) {
        setActivePresupuesto(presupuesto);
    }
}, [presupuesto, setActivePresupuesto])

useEffect (() => {
    if (activePresupuesto !== null) {
        setFormValues({...activePresupuesto})
    }
}, [activePresupuesto])


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

const { pedido, total, cantidad, empresa } = formValues;

const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  })
    


//==============================================================

  return (
    <>
       <button  className="btn btn-primary fabbpng" onClick={ () =>  exportComponentAsPNG(componentRef, {
        fileName: "presupuesto",
        backgroundColor: "white", 
        html2CanvasOptions: {
            scale:2,       
            useCORS: true,
            allowTaint: true,
            logging: true,
            width: 1100,
            height: 1200,
            x: 0,
            y: 0,
            scrollX: 0,
            scrollY: -window.scrollY,
            windowWidth: 1100,
            windowHeight: 1200,
            backgroundColor: "white",
            imageTimeout: 15000,  
           } ,     

         }) } >
     </button>

    <div className="container"  >
        <div className="row">
            <div className="col-12">
                <div className="card" ref={componentRef } >
                    <div style={{ textAlign: 'center' }}>
                    <LogoHtmlCss />
                    </div>
                  

                    <div className="card-header bg-primary text-white">
                        <h3 className="card-title">Coa Revestimientos |  <span  style={{ fontSize: '14px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>Presupuesto </span> </h3>
                    
                        <span  style={{ fontSize: '14px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>   Tel:/ 11-3313-8900 / 11-3324-9832  |  Mail: cubas_beto@hotmail.com | www.coarevestimiento.com.ar</span>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <p className="lead"><strong style={{ fontSize: '16px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>Cliente:</strong> <span className="font-weight-bold" style={{ fontSize: '15px', color: 'black',  textAlign: 'left',  }}>{ formValues.empresa[0].empresa   }  </span></p>
                                <p className="lead"><strong style={{ fontSize: '16px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>Fecha:</strong> <span className="font-weight-bold"  style={{ fontSize: '15px', color: 'black',  textAlign: 'left',  }}>{ fechaActual }</span></p>
                                <p className="lead"><strong style={{ fontSize: '16px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>Hora :</strong> <span className="font-weight-bold"  style={{ fontSize: '15px', color: 'black',  textAlign: 'left',  }}>{horaActual }</span></p>
                            </div>
                            <div className="col-12 col-md-6">
                                <p className="lead"><strong style={{ fontSize: '16px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>Nombre:</strong> <span className="font-weight-bold"  style={{ fontSize: '15px', color: 'black',  textAlign: 'left',  }}>{ formValues.empresa[0].nombre   } </span></p>
                                <p className="lead"><strong style={{ fontSize: '16px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>Teléfono:</strong> <span className="font-weight-bold"  style={{ fontSize: '15px', color: 'black',  textAlign: 'left',  }}>{ formValues.empresa[0].telefono  } </span></p>
                                <p className="lead"><strong style={{ fontSize: '16px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>Email:</strong> <span className="font-weight-bold"  style={{ fontSize: '15px', color: 'black',  textAlign: 'left',  }}> { formValues.empresa[0].email  } 
                                </span></p>
                            </div>
                        </div>
                        <div className="table-responsive-sm">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th className="center" style={{ fontSize: '16px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>#</th>
                                        <th style={{ fontSize: '16px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>Producto</th>                                       
                                        <th className="right" style={{ fontSize: '16px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>Precio <sup>(x m<sup>2</sup>)</sup></th>
                                        <th className="right" style={{ fontSize: '16px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>Categoria</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>                                  
                                        {
                                            formValues.pedido.map( (item, index) => (
                                                <tr key={index}>
                                                    <td className="center">{ index + 1 }</td>
                                                    <td className="left strong">{ item.nombre } </td>
                                                    <td className="right"> { formatter.format(item.precio )}<sup>(el m<sup>2</sup>)</sup></td>
                                                    <td className="right"> { item.categoria }</td>                                                 
                                                </tr>
                                            ))
                                        }  
                                    </tbody>                                    

                                <tfoot>
                                   <tr style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>
                                        <td colSpan="2"></td>
                                        <td className="right"><strong>Cantidad</strong></td>
                                        <td className="right"><strong>  {  formValues.cantidad }<sup>(mts<sup>2</sup>)</sup></strong></td>
                                    </tr>
                                    <tr  style={{ backgroundColor: 'white', color: 'black', fontWeight: 'bold', textAlign: 'left',  }} >
                                        <td colSpan="2"></td>
                                        <td className="right"><strong>Valor</strong></td>
                                        <td className="right"><strong>  { formatter.format( formValues.total) }</strong></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-5">
                            </div>
                            <div className="col-lg-4 col-sm-5 ml-auto">
                                <table className="table table-clear">
                                    <tbody>
                                     <tr>
                                            <td className="left">
                                                <strong>Presupuestado en {formValues.cantidad}<sup>(mts<sup>2</sup>)</sup>
                                                 <span style={{fontSize: '12px', color: 'red', fontWeight: 'bold', textAlign: 'left' } } > sin iva</span> </strong>
                                            </td>
                                            <td className="right">
                                                <strong>
                                                     { formatter.format( formValues.total   * formValues.cantidad )}
                                                </strong>
                                            </td>
                                        </tr>
                                      
                                        <tr>
                                            <td className="left">
                                                <strong>IVA (21%)</strong>
                                            </td>
                                            <td className="right">
                                                { formatter.format( formValues.total   * formValues.cantidad * 0.21 )}                                              
                                            </td>
                                        </tr>

                                        {/* <tr>
                                            <td className="left">
                                                <strong>valor de <sup>(mt<sup>2</sup>)</sup> con iva</strong>
                                            </td>
                                            <td className="right">
                                                <strong>{formatter.format(  formValues.total * 1.21) } </strong>
                                            </td>
                                        </tr> */}

                                        {/* <tr>
                                            <td className="left">
                                                <strong>Presupuestado en {formValues.cantidad}<sup>(mts<sup>2</sup>)</sup>
                                                 <span style={{fontSize: '12px', color: 'red', fontWeight: 'bold', textAlign: 'left' } } > sin iva</span> </strong>
                                            </td>
                                            <td className="right">
                                                <strong>
                                                     { formatter.format( formValues.total   * formValues.cantidad )}
                                                </strong>
                                            </td>
                                        </tr> */}

                                        <tr>
                                            <td className="left">
                                                <strong>Presupuestado en {formValues.cantidad}<sup>(mts<sup>2</sup>)</sup>
                                                <span style={{fontSize: '12px', color: 'green', fontWeight: 'bold', textAlign: 'left' } } > con iva</span> 
                                                </strong>
                                            </td>
                                            <td className="right">
                                                <strong>

                                                      {  formatter.format( formValues.total * 1.21  * formValues.cantidad ) }
                                                   
                                                </strong>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                       </div>
                       <FooterPresupuestos />
                </div>
            </div>
        </div>
    </div>               
                                    
   
    
    </>
  )
}

