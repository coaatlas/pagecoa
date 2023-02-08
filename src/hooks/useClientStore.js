
import { useDispatch, useSelector } from 'react-redux';
import { redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import { calendarApi } from '../api';

import{
    onAddCliente,
    onLoadedClientes,
    onSetActiveCliente,
    onUpdateCliente,
    onDeleteCliente    
} from '../store';


export const useClientStore = () => { 

    const dispatch = useDispatch();
    const { clientes, activeCliente } = useSelector(state => state.clients);
    const { user } = useSelector(state => state.auth);

    const setActiveCliente = (clienteEvent) => {      
        dispatch(onSetActiveCliente(clienteEvent));
    }



    const startSavingCliente = async (cliente) => {

        try {

            if (cliente.id) {
                const { data } = await calendarApi.put(`/clientes/${cliente.id}`, cliente);
                dispatch(onUpdateCliente({ ...cliente, user }));
                return;
            }
         
            // Creando
            const { data } = await calendarApi.post('/clientes', cliente);
            dispatch(onAddCliente({ ...cliente,  id: data.cliente.id , user  
             }));

        }
        catch (error) {
            console.log(error);
            Swal.fire('Error al guardar', error.response.data?.msg, 'error');

        }

    }




    const deleteCliente = async (id) => {
        try {
            const { data } = await calendarApi.delete(`/clientes/${id}`);
            dispatch(onDeleteCliente(id));              

        }
        catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data?.msg, 'error');
        }

    }



    const startLoadingClientes = async () => {  
        try {
            const { data } = await calendarApi.get('/clientes');           
            dispatch(onLoadedClientes(data.clientes));
        }
        catch (error) {
            console.log(error);
            Swal.fire('Error al cargar', error.response.data?.msg, 'error');
        }
    }



    return {
        //* Propiedades
        clientes,
        activeCliente,

        //* Métodos
        setActiveCliente,
        startSavingCliente,
        deleteCliente,
        startLoadingClientes   

    }
}




