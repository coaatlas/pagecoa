import React from 'react'

export const Copirrigth = () => {

  const url="https://www.puentesdigitales.com.ar/";
  const year = new Date().getFullYear();
  const name = "Puentes Digitales";

  return (
    <>
    
    <div className="container-fluid copyright bg-dark py-4">
        <div className="container text-center">
            <p className="mb-2">Copyright &copy; {year} <a className="fw-semi-bold" href="https://www.coarevestimiento.com.ar/#/home"> Coa Revestimientos</a>, All Right Reserved.
            </p>
          
            <p className="mb-0">Designed By <a className="fw-semi-bold" href={url}>{name} Codex</a> Distributed
                By: <a href={url}>{name}</a> </p>
        </div>
    </div>
    
    </>
  )
}
