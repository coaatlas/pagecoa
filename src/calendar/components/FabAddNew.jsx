import { addHours } from 'date-fns'
import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'
import { onOpenDateModal } from '../../store'
import './fabaddnew.css'



export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            amount: 0,
            start: new Date(),
            end: addHours( new Date(), 2 ),
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Fernando'
            }
        });
        openDateModal();
    }


  return (
    <button
        className="btn btn-primary fabb"
        onClick={ handleClickNew }
    >
    </button>
  )
}