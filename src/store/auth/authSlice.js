import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status : 'checking',//checking, authenticated, not-authenticated
        user: {},
        errorMesaage:undefined
     
    },
    reducers: {
       onChecking: (state, action) => {
              state.status = 'checking';
                state.user = {};
                state.errorMesaage = undefined;
        },
       onLogin: (state, action) => {
            state.status = 'authenticated';
            state.user = action.payload;
            state.errorMesaage = undefined;
        },
        onLogout: (state, action) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMesaage = action.payload;
        },

        clearError: (state, action) => {
            state.errorMesaage = undefined;
        }

    }
});

export const {  onChecking,onLogin, onLogout , clearError} = authSlice.actions;
