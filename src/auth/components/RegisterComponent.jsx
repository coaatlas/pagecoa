import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useAuthStore, useForm } from '../../hooks'
import './login.css'

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
}


export const RegisterComponent = () => {
    const{ startRegister,errorMesaage }=useAuthStore();
    const {registerName,registerEmail,registerPassword,registerPassword2,onInputChange}= useForm (registerFormFields);

//===============RegisterSubmit======================================

    const registerSubmit = (e) => {
        e.preventDefault();
        if (registerPassword !== registerPassword2) {
            Swal.fire('Error', 'Las contraseñas deben ser iguales', 'error')
            return;
        }
        startRegister({name:registerName ,email: registerEmail,password: registerPassword});     
    }


    useEffect(() => {
        if (errorMesaage) {
            Swal.fire( 'error',errorMesaage, 'error')
        }
    }, [errorMesaage])


    
  return (
    <>
    
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


