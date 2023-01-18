import { useDispatch, useSelector } from "react-redux"
import { calendarApi } from "../api";


export const useAuthStore = () => {

    const { status,user,errorMesaage } =useSelector(state =>state.auth);

    const dispach=useDispatch() ;

    const startLogin = async({email,password}) => {

        console.log({email,password});
        try {
            
            const resp = await calendarApi.post('/auth',{email,password});
            console.log(resp.data);
            dispach(onLogin(resp.data));
        } catch (error) {
            console.log({mes:error});
        }

    }



  return {
    status,
    user,
    errorMesaage,
    startLogin

  }

  
}

