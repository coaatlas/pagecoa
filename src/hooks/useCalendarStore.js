import { useDispatch, useSelector } from 'react-redux';
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
        

        // Update event
        if( calendarEvent._id ) {
            // Actualizando
            dispatch( onUpdateEvent({ ...calendarEvent }) );
        } else {
            // Creando
            const {data}= await calendarApi.post( '/events', calendarEvent );
            dispatch( onAddNewEvent({ ...calendarEvent, id: data.evento.id,user }) );
        }
    }

    const startDeletingEvent = () => {
        // Todo: Llegar al backend
        dispatch( onDeleteEvent() );
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