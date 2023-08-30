
import { createSlice } from "@reduxjs/toolkit";


// const tempCliente = [
//     {
//         _id: new Date().getTime(),
//         nombre: "lfelix",
//         apellido: "Perez",
//         empresa: "Empresa",
//         email: "em@gmail.com",
//         telefono: "123456789",
//         user : {
//             _id: "123",
//             name: "leofa"
//         }
//     } ,
    
//     {
//     _id: new Date().getTime(),
//     nombre: "leo",
//     apellido: "Perez",
//     empresa: "Empresa",
//     email: "em@gmail.com",
//     telefono: "123456789",
//     user : {
//         _id: "123",
//         name: "leofa"
//     }
// } ,
// {
//     _id: new Date().getTime(),
//     nombre: "Juan",
//     apellido: "Perez",
//     empresa: "Empresa",
//     email: "em@gmail.com",
//     telefono: "123456789",
//     user : {
//         _id: "123",
//         name: "leofa"        
//     }

// }]




export const clientesSlice = createSlice({
  
    name: "clientes",
    initialState: {
        isLoadingClients: true,
        clientes: [
            //tempCliente
        ],
        activeCliente: null
    },
    reducers: {

        onSetActiveCliente: (state, { payload }) => {
            state.activeCliente = payload;
       
        }, 

        onAddCliente: (state, { payload }) => {

            state.clientes.push(payload);
            state.activeCliente = null;
        },
        onUpdateCliente: (state, { payload }) => {
            state.clientes = state.clientes.map(ec=> {
                if (ec.id === payload.id) {
                    return payload;
                }
                return ec;
            });
        } ,
        onDeleteCliente: (state) => {
        
            if (state.activeCliente) {
                state.clientes = state.clientes.filter(ec => ec.id !== state.activeCliente.id);
                state.activeCliente = null;
            }      
            
        } ,
        onLoadedClientes: (state, { payload = [] }) => { 
            state.isLoadingClients = false;
            //state.clientes = payload;


            payload.forEach(cliente => {
                const exists = state.clientes.find(c => c.id === cliente.id);
                if (!exists) {
                    state.clientes.push(cliente);
                }
            }
            
            );

        } ,
    }
});

export const { 
    onSetActiveCliente,
    onAddCliente,
    onUpdateCliente,
    onDeleteCliente,
    onLoadedClientes    
 } = clientesSlice.actions;