import React from 'react'
import { Link } from 'react-router-dom'
import Pdf from "react-to-pdf";
import { FabAddPdf } from './FabAddPdf';

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
              <div className="col-lg-6">
                  <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                  <h1 className="display-1">En Construcción</h1>
                  <h1 className="mb-4">Page Not Found</h1>
                  <p className="mb-4">
                    pronto estaremos subiendo videos de nuestros trabajos realizados
                  </p>
                      <Link to="/home"><a className="btn btn-primary py-3 px-5" href="">Go Back To Home</a></Link>
              </div>
          </div>
      </div>
  </div>
  </div>

 
   </>
  )
}
