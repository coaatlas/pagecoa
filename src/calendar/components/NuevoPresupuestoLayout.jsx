import { it } from 'date-fns/locale';
import React, { useEffect } from 'react'
import { useAuthStore, usePresupuestosStore } from '../../hooks';
import { PrecioResumen } from './PrecioResumen';
import { ProductoResumen } from './ProductoResumen';
import './tabla.css'





export const NuevoPresupuestoLayout = ({ titulo, pedido, total, cliente }) => {

    const { presupuestos, startLoadingPresupuestos, } = usePresupuestosStore();
    const { user } = useAuthStore();

    const url = "https://www.coarevestimiento.com.ar/#/home";
    //fecha y hora actual
    const fecha = new Date();
    const hoy = fecha.getDate();
    const mesActual = fecha.getMonth() + 1;
    const year = fecha.getFullYear();

    useEffect(() => {
        startLoadingPresupuestos();
    }, [])

    return (
        <>
            <div className="col-lg-7 pb-5">
                <h3 className="font-weight-semi-bold">{titulo} {cliente}</h3>

                <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                        <small className="fas ">COA </small> &nbsp;
                        <small className="fas "> REVESTIMIENTOS</small><br />
                        <small className="fas  fa-mobile-alt mr-1"></small>  11-1234-5678<br />
                        <small className="fas  fa-envelope mr-1">nn@dddd.com</small>
                    </div>
                </div>
                <div className="form-group mb-2">
                    <h3 >Realizado por :<span > {user.name}<p className="mb-4">el : {pedido}</p></span></h3>
                </div>
                <hr />

                <table className="table table-bordered table-responsive  responsivegene">
                    <thead
                        className="thead-light">
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Prrecio<sup>( x m<sup>2</sup> )</sup></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >
                                {
                                    presupuestos.length > 0 ? (
                                        <>
                                            {
                                                presupuestos.map((item) => (
                                                    console.log(item.pedido.nombre)
                                                ))

                                            }
                                        </>
                                    ) : (
                                        <h3> No hay productos </h3>
                                    )
                                }
                            </td>

                            <td >
                                {
                                    presupuestos.length > 0 ? (
                                        <>
                                            {
                                                presupuestos.map((item) => (
                                                    <PrecioResumen
                                                        key={item.id}
                                                        precio={item.pedido.precio}
                                                    />
                                                ))
                                            }
                                        </>
                                    ) : (
                                        <h3> No hay productos </h3>
                                    )
                                }
                            </td>
                        </tr>

                    </tbody>
                </table>

                <div className="d-flex mb-3">
                    <h5 className="font-weight-semi-bold mb-4">Total  :  </h5>
                    <h5 className="font-weight-semi-bold mb-4"> $ {total} </h5>
                </div>

                <div >
                    <span>Los precios son sujetos a cambios sin previo aviso</span> <br />
                    <span>Los precios no incluyen IVA</span> <br />
                    <span>Los precios no incluyen traslado</span> <br />
                    <span>El Presupuesto se respetara por 15 dias a partir de la fecha de emision : {hoy}/{mesActual}/{year} ,Pasando la fecha se ajustaran nuevamente</span> <br />
                    <span>Pago en efectivo 50% comienzo 50% finalización de obra</span> <br />
                    <p className="mb-2"> <a className="fw-semi-bold" href={url}> Coa Revestimientos</a>
                    </p>
                </div>
                <div className="d-flex align-items-center mb-4 pt-2">
                    <button className="btn btn-primary px-3"><i className="fa fa-shopping-cart mr-1"></i> pdf</button>
                </div>
            </div>

        </>
    )
}
