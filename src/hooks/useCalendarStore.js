import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { calendarApi } from '../api';
import { CalendarEvent } from '../calendar/components/CalendarEvent';
import { convertEventsToDate } from '../calendar/helpers/convertEventsToDate';
import { onAddNewEvent, onDeleteEvent, onLoadedEvents, onSetActiveEvent, onUpdateEvent } from '../store';



export const useCalendarStore = () => { 
  
    const dispatch = useDispatch();
    const { events, activeEvent } = useSelector( state => state.calendar );
    const {user} = useSelector( state => state.auth );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent( calendarEvent ) ) 
    }

    const startSavingEvent = async( calendarEvent ) => {

        try {
              // Update event
        if( calendarEvent.id ) {
            // Actualizando

            const {data}= await calendarApi.put( `/events/${calendarEvent.id}`, calendarEvent );
            dispatch( onUpdateEvent({ ...calendarEvent , user }) );
            return
        } 
            // Creando
            const {data}= await calendarApi.post( '/events', calendarEvent );
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id,user }) );
        
        }
            catch (error) {

            console.log(error);
            Swal.fire('Error al guardar', error.response.data?.msg  , 'error');


            }        

      
    }

    const startDeletingEvent = async () => {
        // Todo: Llegar al backend

        try {
          await  calendarApi.delete( `/events/${activeEvent.id}` ); 
            dispatch( onDeleteEvent() );
        }
        catch (error) {
            console.log(error);
            Swal.fire('Error al eliminar', error.response.data?.msg  , 'error');
        }      
    }

    const startLoadingEvents = async() => {

        try {
            const {data} = await calendarApi.get( '/events' );          
            const events= convertEventsToDate( data.eventos );
            dispatch( onLoadedEvents( events ) );
            console.log(events);          

        }
        catch (error) {
            console.log(error);
        }
    }


    return {
        //* Propiedades
        activeEvent,
        events,
      

        //* Métodos
        startDeletingEvent,
        setActiveEvent,
        startSavingEvent,
        startLoadingEvents
    }
}