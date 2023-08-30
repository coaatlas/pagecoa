
import React, { useEffect } from 'react'
import {  useAuthStore, useForm } from '../../hooks'
import './login.css'


import Swal from 'sweetalert2'


const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
}


export const LoginComponets = () => {
 
    const{ startLogin,errorMesaage }=useAuthStore();

    const {loginEmail,loginPassword,onInputChange}= useForm (loginFormFields);

    //===============LoginSubmit======================================

    const LoginSubmit = (e) => {
        e.preventDefault();
        startLogin({email:loginEmail,password:loginPassword})
    }

    useEffect(() => {
        if (errorMesaage) {
            Swal.fire('Error', errorMesaage, 'error')
        }
    }, [errorMesaage])



  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />  
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
          <div className="row justify-content-center">
          <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>

                    <form onSubmit={LoginSubmit}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name='loginEmail'
                                value={loginEmail}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name='loginPassword'
                                value={loginPassword}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
                            />
                        </div>
                    </form>


                </div>              
          </div>
      </div>
  </div>
  
  </>
  )
}
