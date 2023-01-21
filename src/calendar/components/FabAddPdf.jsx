
import React from 'react'

import './fabaddnew.css'

import Pdf from "react-to-pdf";


const ref = React.createRef();

export const FabAddPdf = () => {



    const handleClickNew = () => {
        <Pdf targetRef={ref} filename="Presupuesto.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generar PDF</button>}
        </Pdf>
    }


  return (
    <button
        className="btn btn-primary fabb"
        onClick={ handleClickNew }
    >
    </button>
  )
}