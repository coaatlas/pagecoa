import { useDispatch, useSelector } from 'react-redux';
import {  onCloseDateModalPdf,  onOpenDateModalPdf } from '../store';


export const useUiStorePdf = () => {

    const dispatch = useDispatch();

    const { isDateModalOpenPdf  } = useSelector( state => state.uipdf );
    const openDateModalPdf = () => { dispatch( onOpenDateModalPdf() ) }
    const closeDateModalPdf = () => {   dispatch( onCloseDateModalPdf() )  }

    const toggleDateModal = () => {
        (isDateModalOpenPdf)
            ? onOpenDateModalPdf()
            : closeDateModalPdf(); 
    }



    return {
        //* Propiedades
        isDateModalOpenPdf,

        //* Métodos
        closeDateModalPdf,
        openDateModalPdf,
        toggleDateModal,

    }

}