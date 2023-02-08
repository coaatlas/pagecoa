
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { calendarSlice } from './calendar/calendarSlice';
import { clientesSlice } from './clientes/clientesSlice';
import { presupuestoSlice } from './presupuestos/presupuestoSlice';
import { productosSlice } from './productos/productosSlice';
import { uiSlice } from './ui/uiSlice';


export const store = configureStore({ 
    reducer: {
        products: productosSlice.reducer,
        clients: clientesSlice.reducer,
        presupuestos: presupuestoSlice.reducer,
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer,
        auth: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
