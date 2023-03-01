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
                <span   style={{textAlign: 'left', color: 'black', fontSize: '11px' }}>Los precios son sujetos a cambios sin previo aviso</span> <br/>
                
                <span   style={{textAlign: 'left', color: 'black', fontSize: '11px' }}>Los precios no incluyen traslado</span> <br/>
                <span   style={{textAlign: 'left', color: 'black', fontSize: '10px' }}>Los precios son validos por 30 dias a partir de la fecha de emision : {hoy}/{mesActual}/{year} </span> <br/>
                <p className="mb-2"> <a className="fw-semi-bold"  href={url}> Coa Revestimientos</a>
                </p>
                </div>
   </>
  )
}
