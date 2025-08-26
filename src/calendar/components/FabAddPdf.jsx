
import React from 'react'
import './fabaddnew.css'
import Pdf from "react-to-pdf";


const ref = React.createRef();

export const FabAddPdf = () => {

    const handleClickNew = () => {
        <Pdf targetRef={ref} filename="Presupuesto.pdf">
        {({ toPdf }) => <button  className="btn btn-primary fabbpdf" onClick={toPdf}></button>}
        </Pdf>
    }


  return (
    <button
        className="btn btn-primary fabbpdf"
        onClick={ handleClickNew }
    >
    </button>
  )
}