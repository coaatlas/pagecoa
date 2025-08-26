import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import { calendarApi } from "../api";
import { clearError, onChecking, onLogin, onLogout, onLogoutCalendar } from "../store";


export const useAuthStore = () => {

    const { status,user,errorMesaage } =useSelector(state =>state.auth);
    const dispach=useDispatch() ;

//=========Login================ 

    const startLogin = async({email,password}) => {

      dispach(onChecking());
     
        try {            
            const {data} = await calendarApi.post('/auth',{email,password});
           
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date',new Date().getTime());
            dispach(onLogin({name: data.name,uid: data.uid}));

            if (data.token) {
              window.location.href = "#/calendar";
            }
           
        } catch (error) {

          dispach (onLogout( 'credenciales incorrectas' ) );
          Swal.fire('Error', 'credenciales incorrectas' , 'error');

          setTimeout(() => {
            dispach(clearError());
          }, 1500);
          
        }
    }

//=========Register================

    const startRegister = async({email,password,name}) => {
        
        dispach(onChecking());
      
          try {            
              const {data} = await calendarApi.post('/auth/new',{email,password,name});
           
              localStorage.setItem('token',data.token);
              localStorage.setItem('token-init-date',new Date().getTime());
              Swal.fire('Success', 'Usuario creado correctamente - vuelva a ingresar', 'success');

             localStorage.clear();
      dispach(onLogout());

      if (window.location.href.includes('#/register')) {
        window.location.href = "#/login";
      }           
          } catch (error) {
            console.log(error);
            Swal.fire('Error', error.response.data.message , 'error');            
            localStorage.clear();
            dispach(onLogout());

            if (window.location.href.includes('#/register')) {
              window.location.href = "#/home";
            }

            setTimeout(() => {
              dispach(clearError());
            }
            , 1500);  
           
          }
    }

    //=========renew=token================

    const checkToken = async() => {

      const token = localStorage.getItem('token');
      if(!token){
        dispach(onLogout());
        return false;
      }   

      try {
        const {data} = await calendarApi.get('/auth/renew');
        localStorage.setItem('token',data.token);
        localStorage.setItem('token-init-date',new Date().getTime());
        dispach(onLogin({name: data.name,uid: data.uid}));
        return true;
      } catch (error) {
        localStorage.clear();
        dispach(onLogout());
        return false;
      }
    }

    //=========logout================

    const startLogout = () => {
      localStorage.clear();
      dispach(onLogoutCalendar());
      dispach(onLogout());

      if (window.location.href.includes('#/calendar') ) {
        window.location.href = "#/home";
      }

    }

  return {
    status,
    user,
    errorMesaage,
    startLogin,
    startRegister,
    checkToken,
    startLogout
  }
  
}

