
import React, { useEffect } from 'react'
import { useState } from 'react';
import Pdf from "react-to-pdf";
import { FabAddPdf } from './FabAddPdf';
import 'sweetalert2/dist/sweetalert2.min.css';

import './form.css';
import { useAuthStore } from '../../hooks';
import { BannerComponent } from '../../ui';
import { BanerNavbar } from '../../ui/components/banner/BanerNavbar';

const ref = React.createRef();

export const PresupuestoContenido = () => {
    const url="https://www.coarevestimiento.com.ar/#/home";

    //fecha y hora actual
    const fecha = new Date();
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth() + 1; 
    const year = fecha.getFullYear();
    const { user  } = useAuthStore();

   //suma de los productos   
   const [number, setNumber] = useState({
        one: 0,
        two: 0, 
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0,
        eight: 0,
        nine: 0,
        ten: 0,
        eleven: 0,
        twelve: 0,
        thirteen: 0,
        fourteen: 0,
        fifteen: 0,
        sixteen: 0,
        seventeen: 0,
        eighteen: 0,
        nineteen: 0,
    })
   const [suma, setSuma] = useState()
 
   useEffect(()=>{
     const { one,
         two,
         three ,
            four,
            five,
            six,
            seven,
            eight,
            nine,
            ten,
            eleven,
            twelve,
            thirteen,
            fourteen,
            fifteen,
            sixteen,
            seventeen,
            eighteen,
            nineteen
        } = number
     setSuma(Number(one) + 
             Number(two) + 
             Number(three) +
             Number(four) +
             Number(five) +
             Number(six) +
             Number(seven) +         
             Number(eight) +
             Number(nine) +
             Number(ten) +
             Number(eleven) +
             Number(twelve) +
             Number(thirteen) +
             Number(fourteen) +
             Number(fifteen) +
             Number(sixteen) +
             Number(seventeen) +
             Number(eighteen)  +
             Number(nineteen)
      )
   },[number])
 
   const handleInput = (event) => {
     const { name, value } = event.target
     setNumber({...number, [name]: value})
   }   


  return (
   <>
   <Pdf targetRef={ref} filename="Presupuesto.pdf" 
        options={{           
            unit: 'in',
            format: [  12, 21 ]  
                }} >
        {({ toPdf }) => <button       className="btn btn-primary fabbpdf" onClick={toPdf}></button>}
        </Pdf>

     <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    
      <div className="container text-center">
   
      <div ref = {ref} >
          <div className="row justify-content-center">
   
      
        <form className="form"   >            
       
        <h3> Presupuesto  </h3>
            <div className="form-group mb-2">
                <h3 >Fecha  :<span > {hoy}/{mesActual}/{year}</span></h3>                
            </div>

            <div className="form-group mb-2">
                <h3 >Realizado por :<span > {user.name}</span></h3>
           </div>        
           <hr  />

           <p>Dirigido a:  
            <input
             type="text"
             name="nombre"
             placeholder="Nombre del cliente" 
             className="form-control-lgg border-0"
             required 
            
             /></p>

             <hr  />
             <br />
           <p>Piso vinilico en rollo <sup>( x m<sup>2</sup> )</sup> $ : <input className="form-control-lg border-0" onChange={handleInput} name="one" value={number.one} placeholder="Ingesa monto"/></p>
           <p>Pulido e imprimación <sup>( x m<sup>2</sup> )</sup> $ :<input className="form-control-lg border-0"    onChange={handleInput} name="two" value={number.two} placeholder="Ingesa monto"/></p>
           <p>Baldosas de pvc<sup>( x m<sup>2</sup> )</sup> $ :<input className="form-control-lg border-0"           onChange={handleInput} name="three" value={number.three} placeholder="Ingesa monto"/></p>
           <p>Capa dos manos<sup>( x m<sup>2</sup> )</sup> $ :<input className="form-control-lg border-0"           onChange={handleInput} name="four" value={number.four} placeholder="Ingesa monto"/></p>
           <p>Capa una manos<sup>( x m<sup>2</sup> )</sup> $ :<input className="form-control-lg border-0"           onChange={handleInput} name="five" value={number.five} placeholder="Ingesa monto"/></p>
           <p>Trabajo minimo ( 20 m<sup>2</sup> ) gl $ :<input className="form-control-lg border-0"           onChange={handleInput} name="six" value={number.six} placeholder="Ingesa monto"/></p>
           <p>Instlación vinilico en pared<sup>( x m<sup>2</sup> )</sup> $ :<input className="form-control-lg border-0"           onChange={handleInput} name="seven" value={number.seven} placeholder="Ingesa monto"/></p>
           <p>Adaptador para zocalo sanit ml $ :<input className="form-control-lg border-0"           onChange={handleInput} name="eight" value={number.eight} placeholder="Ingesa monto"/></p>
           <p>Zocalo sanitario ml $ :<input className="form-control-lg border-0"           onChange={handleInput} name="nine" value={number.nine} placeholder="Ingesa monto"/></p>
           <p>Soldadura ml $ :<input className="form-control-lg border-0"           onChange={handleInput} name="ten" value={number.ten} placeholder="Ingesa monto"/></p>
           <p>Malla cobre ml $ :<input className="form-control-lg border-0"           onChange={handleInput} name="eleven" value={number.eleven} placeholder="Ingesa monto"/></p>
           <p>Trabajo en interior del pais % $ :<input className="form-control-lg border-0"           onChange={handleInput} name="twelve" value={number.twelve} placeholder="Ingesa monto"/></p>
           <p>Descolocación de piso de goma/otros<sup>( x m<sup>2</sup> )</sup> $ :<input className="form-control-lg border-0"           onChange={handleInput} name="thirteen" value={number.thirteen} placeholder="Ingesa monto"/></p>
           <p>Colocación de varillas ml $ :<input className="form-control-lg border-0"           onChange={handleInput} name="fourteen" value={number.fourteen} placeholder="Ingesa monto"/></p>
           <p>Listones Lvt pegados ml $ :<input className="form-control-lg border-0"           onChange={handleInput} name="fifteen" value={number.fifteen} placeholder="Ingesa monto"/></p>
           <p>Pvc en rollo con 2 manos de masa niveladora <sup>( x m<sup>2</sup> )</sup> $ :<input className="form-control-lg border-0"           onChange={handleInput} name="sixteen" value={number.sixteen} placeholder="Ingesa monto"/></p>
           <p>Goma en rollo 2 manos de masa niveladora <sup>( x m<sup>2</sup> )</sup> $ :<input className="form-control-lg border-0"           onChange={handleInput} name="seventeen" value={number.seventeen} placeholder="Ingesa monto"/></p>
           <p>Goma en rollo<sup>( x m<sup>2</sup> )</sup> gl $ :<input className="form-control-lg border-0"           onChange={handleInput} name="eighteen" value={number.eighteen} placeholder="Ingesa monto"/></p>
           <p>Pvc en rollo<sup>( x m<sup>2</sup> )</sup> gl $ :<input className="form-control-lg border-0"           onChange={handleInput} name="nineteen" value={number.nineteen} placeholder="Ingesa monto"/></p>


            <hr />
            <br />
           <p> Presupuesto<sup>( x m<sup>2</sup> )</sup> $ :  <input value={suma}/></p> 

               
            <p>Notas :  
                <textarea 
                    type="text" 
                    className="form-control-lgnotas border-0"
                    placeholder="ingrese notas"
                    rows="3"
                    name="notes"
                    cols="46" 

                 
                ></textarea></p>

                <hr  />

                <span>Los precios son sujetos a cambios sin previo aviso</span>
                <span>Los precios no incluyen IVA</span>
                <span>Los precios no incluyen traslado</span>
                <span>El Presupuesto se respetara por 15 dias a partir de la fecha de emision : {hoy}/{mesActual}/{year} ,Pasando la fecha se ajustaran nuevamente</span> <br/>
                <span>Pago en efectivo 50% comienzo 50% finalización de obra</span> <br/>
                <p className="mb-2"> <a className="fw-semi-bold"  href={url}> Coa Revestimientos</a>
            </p>

                <hr  />     

        </form>
      
          </div>
          
      </div>
  </div>
  </div>

 
   </>
  )
}
