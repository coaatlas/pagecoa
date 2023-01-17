import React from 'react'
import { Link } from 'react-router-dom'

export const CalendarNavBar = () => {
  return (
    <>
    <div className='navbar navbar-dark bg-dark mb-4 px-4' >
    <span  >
      <i className='fas fa-calendar-alt fa-2x' >&nbsp;COA</i>
      
    </span>
   
 
      <div
      style={{
        display: 'flex',
        justifyContent: 'space-between ',
        alignItems: 'center',      
    
      }}
    

      >
 
 <button className='btn btn-outline-danger'>
 <Link  to="/register"
 style={{
  textDecoration: 'none',
  color: 'white',
}}


 >   <i className="fas fa-user-plus"></i>
  <span> Registro </span> </Link>
    </button>
    &nbsp;    
    <button className='btn btn-outline-danger'>
      <i className='fas fa-sign-out-alt'></i>
      <span> Logout</span>
    </button>
    </div>

    


    

     </div>
    </>
   
  )
}
