import React, { useEffect ,useState} from 'react'
import { usePresupuestosStore, useUiStore } from '../../hooks'

import { ClienteEmpresaResumen } from './ClienteEmpresaResumen';
import { ClienteResumen } from './ClienteResumen';
import { FabAddPresupuesto } from './FabAddPresupusto';
import { FooterPresupuestos } from './FooterPresupuestos';

import { PrecioResumen } from './PrecioResumen';
import { PresupuestotModal } from './PresupuestoModal';
import { PresupuestotModalPdf } from './PresupuestoModalPdf';
import { ProductoResumen } from './ProductoResumen';


export const NuevoPresupuesto = () => {
    const { openDateModal } = useUiStore();   

const{ presupuestos , startLoadingPresupuestos,   startDeletePresupuesto, setActivePresupuesto,startSavingPresupuesto}= usePresupuestosStore ();


  //fecha y hora actual
  const fecha = new Date();
  const hoy = fecha.getDate();
  const mesActual = fecha.getMonth() + 1; 
  const year = fecha.getFullYear();
  const fechaActual = `${hoy}/${mesActual}/${year}`

const handleEdit =  (item) => {
    setActivePresupuesto(item)
    openDateModal();
}

const handleDelete = async (item) => {

  setActivePresupuesto(item)
    const { id } = item;
   
    await   startDeletePresupuesto(id);
    console.log('borrado');
}
const [item, estableceDatos] = useState('');

const padreAHijo = (item) => {
    estableceDatos(item);
    const { id   } = item;
    setActivePresupuesto(item) 
    window.open(`/#/presupuestopdf/${id}`, '_blank')
  }


useEffect(() => {
    startLoadingPresupuestos();
    }, [])

  return (
     <>
  <div className="container-l py-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
          <div className="row justify-content-center"> 

          <table className="table table-bordered table-responsive  responsivegene">                
                    <thead
                        className="table-dark text-center">
                        <tr rowSpan="4"><th colSpan="9" scope="col">Presupuesto : <span>{fechaActual}</span></th></tr>
                        <tr> 
                        <th  colSpan="3" >                            
                        </th>                    
                        <th scope="col">Productos</th>
                        <th scope="col">valor<sup>(m<sup>2</sup>)</sup></th>
                        <th scope="col">Total  Presupuestado </th>
                        <th scope="col">cantidad<sup>(mts<sup>2</sup>)</sup> Presupuestado </th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Empresa</th> 
                      
                         </tr>
                    </thead>
                    <tbody>                       
                      {
                           ( 
                            (presupuestos.length === 0) )  
                            ? <tr><td colSpan="7" className="text-center">No hay productos</td></tr>

                            :presupuestos.map(item => (
                                    <tr key={item.id}>  
                                      <td>
                                            <span 
                                            type="button"
                                            style={{cursor: 'pointer', color: 'green' }}
                                            onClick={() => handleEdit(item)}>
                                            <i className="fas fa-light fa-edit"></i>
                                            </span>
                                        </td>
                                        <td>
                                            <span
                                            type="button"
                                            style={{cursor: 'pointer', color: 'red' }}
                                            onClick={() => handleDelete(item)}>
                                            <i className="fas fa-light fa-trash"></i>
                                            </span>    
                                        </td>    
                                        <td>
                                            <span  type="button" style={{cursor: 'pointer', color: 'red' }}  onClick={() => padreAHijo(item)} > <i className="fas fa-solid fa-file-pdf"></i> </span>    
                                        </td>                                                            
                                        <td>{item.pedido.map((item) => (<ProductoResumen  key={item.nombre} producto={item.nombre} />)  )} </td>
                                        <td>{item.pedido.map((item) => (<PrecioResumen  key={item.precio} precio={item.precio} />)  )} </td>
                                        <td><span style={{border: 'none',color:'green', fontSize: '0.9rem'}}>&#65284;</span><span style={{border: 'none',color:'red', fontSize: '0.9rem'}}>{item.total }</span></td>
                                        <td><span style={{border: 'none',color:'red', fontSize: '0.9rem'}}>{item.cantidad }<span style={{border: 'none',color:'green', fontSize: '0.9rem'}}><sup>( m<sup>2</sup>)</sup></span></span></td>
                                        <td>{item.empresa.map((item) => ( <ClienteResumen  key={item.email} nombre={item.nombre} />)  ) }  </td>  
                                        <td>{item.empresa.map((item) => ( <ClienteEmpresaResumen  key={item.empresa} empresa={item.empresa} />)  ) } </td>                                                                    
                                    </tr> 
                                ))
                            }                                       
                        </tbody>
                </table>
          
             <FooterPresupuestos />
                   
          </div>
      </div>
  </div> 

 <PresupuestotModal />
 <PresupuestotModalPdf  />
 <FabAddPresupuesto />
 </>
  )
}
