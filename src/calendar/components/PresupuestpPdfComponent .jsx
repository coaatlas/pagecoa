import React, { useEffect, useRef, useState } from 'react'
import { exportComponentAsPDF , exportComponentAsPNG} from 'react-component-export-image';
import {  usePresupuestosStore, useUiStorePdf} from '../../hooks';
import { FooterPresupuestos } from './FooterPresupuestos';
import { useLocation } from 'react-router-dom';
import './fabaddnewPdf.css';



const ref = React.createRef();

export const PresupuestpPdfComponent  = (props) => {   

  const router = useLocation();

    const { pathname } = router;
    const path = pathname.split('/');
    const id = path[2];
    const nombre = path[3];  

    // const url = window.location.href;
    // const url2 = url.split('/');
    // const url3 = url2[0];
    // const url4 = url2[1];
    // const url5 = url2[2];
    // const url6 = url2[3];
    // const url7 = url2[4];
    // const url8 = url2[5];
    // const url9 = url2[6];
    // const url10 = url2[7];
    // const url11 = url2[8];
   
    // var urlLimpia = url9.replace(/%20/g, " ");
    // console.log("urlLimpia ;", urlLimpia);

    // console.log(router);
    // console.log(pathname);
    // console.log(path);
    // console.log(id);
    // console.log(nombre);
    // console.log(url);
    // console.log(url2);  
    // console.log(url3);
    // console.log(url4);
    // console.log(url5);


    const componentRef = useRef();
    const{presupuestos ,  activePresupuesto,startLoadingPresupuestos,  setActivePresupuesto  }=usePresupuestosStore();
    // const{ isDateModalOpenPdf, closeDateModalPdf }=useUiStorePdf();

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
    //    console.log("presupuesto", presupuesto);

    //    console.log("presupuesto.pedido", presupuesto.pedido);
    //    console.log("presupuesto.empresas", presupuesto.empresa);
    //    console.log("presupuesto.total", presupuesto.total);

      

        //  console.log("pedido", pedido);

        //  pedido.forEach( pedido => {
        //         console.log("pedido.nombre", pedido.nombre);
        //         console.log("pedido.precio", pedido.precio);
        //     }
        //     )
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
                    <div className="card-header bg-primary text-white">
                        <h3 className="card-title">Coa Revestimientos |  <span  style={{ fontSize: '14px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>Presupuesto </span> 
                      
                        </h3>
                        <span  style={{ fontSize: '14px', color: 'black', fontWeight: 'bold', textAlign: 'left',  }}>   Tel:/
          11-3313-8900 / 11-3324-9832  |  Mail: cubas_beto@hotmail.com | www.coarevestimiento.com.ar</span>
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
                                                    <td className="right">$ { item.precio }<sup>(el m<sup>2</sup>)</sup></td>
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
                                        <td className="right"><strong> $ {  formValues.total }</strong></td>
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
                                                <strong>Subtotal valor de <sup>(mts<sup>2</sup>)</sup></strong>
                                            </td>
                                            <td className="right">{  formValues.total }</td>
                                        </tr>
                                      
                                        <tr>
                                            <td className="left">
                                                <strong>IVA (21%)</strong>
                                            </td>
                                            <td className="right">$
                                                {  formValues.total * 0.21 }                                                
                                           
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="left">
                                                <strong>valor de <sup>(mts<sup>2</sup>)</sup> con iva</strong>
                                            </td>
                                            <td className="right">
                                                <strong>
                                                    $ {  formValues.total * 1.21 }

                                                </strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="left">
                                                <strong>Total presupuestado en {formValues.cantidad}<sup>(mts<sup>2</sup>)</sup> sin iva</strong>
                                            </td>
                                            <td className="right">
                                                <strong>
                                                    $ {  formValues.total   * formValues.cantidad }
                                                </strong>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="left">
                                                <strong>Total presupuestado en {formValues.cantidad}<sup>(mts<sup>2</sup>)</sup><span
                                                style={{fontSize: '12px', color: 'red', fontWeight: 'bold', textAlign: 'left' } } 
                                                >con iva</span> con iva</strong>
                                            </td>
                                            <td className="right">
                                                <strong>
                                                    $ {  formValues.total * 1.21  * formValues.cantidad }
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

