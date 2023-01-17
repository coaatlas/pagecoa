import React from 'react'

import { useForm } from '../../hooks'

import './login.css'

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
}


export const RegisterComponent = () => {

    const {registerName,registerEmail,registerPassword,registerPassword2,onInputChange    }= useForm (registerFormFields);

    const registerSubmit = (e) => {
        e.preventDefault();
        console.log(registerName , registerEmail, registerPassword, registerPassword2);     
    }
    
  return (
    <>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
          <h1 className="display-3 text-white animated slideInRight">404 Error</h1>
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb animated slideInRight mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item active" aria-current="page">404 Error</li>
              </ol>
          </nav>
      </div>
  </div>
  
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container text-center">
          <div className="row justify-content-center">        

                <div className="col-md-6 login-form-2">
                    <h3>Registro  de usuario COA </h3>
                    <form onSubmit={registerSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name='registerName'
                                value={registerName}
                                onChange={onInputChange}    
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name='registerEmail'
                                value={registerEmail}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña" 
                                name='registerPassword'
                                value={registerPassword}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña" 
                                name='registerPassword2'
                                value={registerPassword2}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
          </div>
      </div>
  </div>
  
  </>
  )
}


