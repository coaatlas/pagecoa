import React, { useEffect, useState } from 'react' ;
import { Calendar} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarNavBar } from './CalendarNavBar' ;

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks';
import { CalendarModal } from './CalendarModal';
import { FabDelete } from './FabDelete';
import { FabAddNew } from './FabAddNew';

import { localizer } from '../helpers/CalendarLocalizer';
import { CalendarEvent } from './CalendarEvent';
import { getMessagesEs } from '../helpers/getMessages';



export const CalendarComponents = () => { 

  const {user}= useAuthStore();

  const { openDateModal } = useUiStore();
  const { events, setActiveEvent ,startLoadingEvents} = useCalendarStore();

  const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week' );

  const eventStyleGetter = ( event, start, end, isSelected ) => {


    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid);

    const style = {
      backgroundColor: isMyEvent ? '#367CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return { 
      style
    }
  }

  const onDoubleClick = ( event ) => {
    // console.log({ doubleClick: event });
    openDateModal();
  }

  const onSelect = ( event ) => {
     
    setActiveEvent(event);
  }

  const onViewChanged = ( event ) => {
    localStorage.setItem('lastView', event );
    setLastView( event )
  }

  useEffect(() => {
    startLoadingEvents();
  }, [])




  return (
    <>
    <br />
    <br />
    <br />
    <br />
    <br />
    
      <CalendarNavBar />

      <Calendar
        culture='es'
        localizer={ localizer }
        events={ events }
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={ getMessagesEs() }
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={onViewChanged }
      />


      <CalendarModal />
      
      <FabAddNew    />
      <FabDelete />


    </>
  )
}