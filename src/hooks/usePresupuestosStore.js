import { useDispatch, useSelector } from 'react-redux';

import Swal from 'sweetalert2';

import { calendarApi } from '../api';

import{
    onAddPresupuesto,
    onLoadedPresupuestos,
    onSetActivePresupuesto,
    onUpdatePresupuesto,
    onDeletePresupuesto
} from '../store';


export const usePresupuestosStore = () => {

    const dispatch = useDispatch();
    const {presupuestos,isLoadingPresupuestos,activePresupuesto} = useSelector(state => state.presupuest);

    const {uid} = useSelector(state => state.auth);



    const setActivePresupuesto = (presupuestoEvent) => {
        dispatch(onSetActivePresupuesto(presupuestoEvent));
    };   

    const startLoadingPresupuestos = async () => {
        try {
            const {data}= await calendarApi.get("/presupuestos");        
            dispatch(onLoadedPresupuestos(data.presupuestos));
        } catch (error) {
            console.log(error);
            Swal.fire('Error al cargar', error.response.data?.msg, 'error');
        }
       
    };

    const startDeletePresupuesto = async (id) => {
        try {
            const resp = await calendarApi.delete(`/presupuestos/${id}`);
           
            dispatch(onDeletePresupuesto(id));
        } catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data?.msg, 'error');
        }
    };


    const startSavingPresupuesto = async (presupuesto) => {
        try {
            if (presupuesto.id) {
                const resp = await calendarApi.put(`/presupuestos/${presupuesto.id}`, presupuesto);
                dispatch(onUpdatePresupuesto({ ...presupuesto, uid }));
                return;
            }
            // Creando
            const resp = await calendarApi.post("/presupuestos", presupuesto);
            dispatch(onAddPresupuesto({ ...presupuesto, id: resp.data.presupuesto.id, uid }));
         

            
        } catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data?.msg, 'error');
        }
    };

    



 
   
    

    return {
        presupuestos,
        activePresupuesto,
        isLoadingPresupuestos,
        startLoadingPresupuestos,
        setActivePresupuesto,
        startDeletePresupuesto ,
        startSavingPresupuesto

}
}

