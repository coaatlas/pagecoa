import React from 'react'

export const FooterPresupuestos = () => {
    const url="https://www.coarevestimiento.com.ar/#/home";
    
  //fecha y hora actual
  const fecha = new Date();
  const hoy = fecha.getDate();
  const mesActual = fecha.getMonth() + 1; 
  const year = fecha.getFullYear();
  return (
   <>
         
      <div >
                <span   style={{textAlign: 'left', color: 'black', fontSize: '8px' }}>Los precios son sujetos a cambios sin previo aviso</span> <br/>
                
                <span   style={{textAlign: 'left', color: 'black', fontSize: '8px' }}>Los precios no incluyen traslado</span> <br/>
              

                <span style={{textAlign: 'left', color: 'black', fontSize: '12px' }} >El Presupuesto se respetara por 15 dias a partir de la fecha de emision : {hoy}/{mesActual}/{year} ,Pasando la fecha se ajustaran nuevamente</span> <br/>
                <span style={{textAlign: 'left', color: 'black', fontSize: '12px' }}>Pago en efectivo 50% comienzo 50% finalización de obra</span> <br/>
     </div>
   </>
  )
}
