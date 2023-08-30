import {createSlice} from '@reduxjs/toolkit';

export const presupuestoSlice = createSlice({

    name: 'presupuesto',
    initialState: {
       isLoadingPresupuestos: true,
         presupuestos: [
                //tempPresupuesto
            ],
            activePresupuesto: null,
    },
    reducers: {
        onSetActivePresupuesto: (state, {payload}) => {
            state.activePresupuesto = payload;
        },

        onAddPresupuesto: (state, {payload}) => {
            state.presupuestos.push({
                ...payload
            } );
            state.activePresupuesto = null;
        },

        onUpdatePresupuesto: (state, {payload}) => {
            state.presupuestos = state.presupuestos.map(ep => {
                if (ep.id === payload.id) {
                    return payload;
                }
            
                return ep;
            });
        },

        onDeletePresupuesto: (state) => {
            if (state.activePresupuesto) {
                state.presupuestos = state.presupuestos.filter(ep => ep.id !== state.activePresupuesto.id);
                state.activePresupuesto = null;
            }
        } ,

        onLoadedPresupuestos: (state, {payload = []}) => {
            // state.presupuestos = payload;
            state.isLoadingPresupuestos = false; 

            payload.forEach(presupuesto => {
                const exists = state.presupuestos.find(p => p.id === presupuesto.id);
                if (!exists) {
                    state.presupuestos.push(presupuesto );
                                
                }
            });

            
        } 
       
    }
});

export const {
    onSetActivePresupuesto, 
    onAddPresupuesto,
    onUpdatePresupuesto,
    onDeletePresupuesto,
    onLoadedPresupuestos
} = presupuestoSlice.actions;