import { addHours } from 'date-fns'
import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'
import './fabaddnew.css'

export const FabDelete = () => {

  
    const { startDeletingEvent}=useCalendarStore()

    const handleDelete = () => {

       startDeletingEvent()



    }




  return (
    <button className="btn btn-primary fabb-danger"
    onClick={handleDelete} >    

    </button>
  )
}
