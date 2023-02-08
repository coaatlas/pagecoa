import {createSlice} from '@reduxjs/toolkit';

export const productosSlice = createSlice({

    name: 'productos',
    initialState: {
        isLoadingClients: true,
        productos: [
            //tempProducto
        ],
        activeProducto: null
    },
    reducers: {

        onSetActiveProducto: (state, {payload}) => {
            state.activeProducto = payload;
        },
        onAddProducto: (state, {payload}) => {
            state.productos.push(payload);
            state.activeProducto = null;
        },
        onUpdateProducto: (state, {payload}) => {
            state.productos = state.productos.map(ep => {
                if (ep.id === payload.id) {
                    return payload;
                }
            
                return ep;
            });
        },
        onDeleteProducto: (state) => {
            if (state.activeProducto) {
                state.productos = state.productos.filter(ep => ep.id !== state.activeProducto.id);
                state.activeProducto = null;
            }
        },
        onLoadedProductos: (state, {payload = []}) => {
            state.isLoadingClients = false;
            //state.productos = payload;

            payload.forEach(producto => {
                const exists = state.productos.find(p => p.id === producto.id);
                if (!exists) {
                    state.productos.push(producto);
                }
            });
        }

    }
});

export const {
    onSetActiveProducto,
    onAddProducto,
    onUpdateProducto,
    onDeleteProducto,
    onLoadedProductos
    
} = productosSlice.actions;