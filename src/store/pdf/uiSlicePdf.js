import { createSlice } from '@reduxjs/toolkit';

export const uiSlicePdf = createSlice({
    name: 'uipdf',
    initialState: {
        isDateModalOpenPdf: false
    },
    reducers: {
        onOpenDateModalPdf: ( state ) => {
            state.isDateModalOpenPdf = true;
        
        },
        onCloseDateModalPdf: ( state ) => {
            state.isDateModalOpenPdf = false;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    onOpenDateModalPdf,
    onCloseDateModalPdf
} = uiSlicePdf.actions;
