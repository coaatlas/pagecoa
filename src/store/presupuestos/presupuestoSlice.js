import {createSlice} from '@reduxjs/toolkit';

export const presupuestoSlice = createSlice({

    name: 'presupuesto',
    initialState: {
        presupuesto: 0,
        restante: 0,
        gastos: []
    },
    reducers: {
        onAddGasto: (state, {payload}) => {
            state.gastos.push(payload);
        }
    }
});

export const {onAddGasto} = presupuestoSlice.actions;