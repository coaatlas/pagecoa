import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../hooks';

export const CalendarNavBar = () => {

  const { user  } = useAuthStore();


  return (
    <>
    <div className='navbar navbar-dark bg-dark mb-4 px-4' >
    <span 
    style={{
      display: 'flex',
      justifyContent: 'space-between',
     
      color: 'white',
      fontSize: '10px',
     
    }}
     >
      <i className='fas fa-calendar-alt fa-2x' >&nbsp;{user.name} </i>      
    </span>
   
 
      <div
      style={{
        display: 'flex',
        justifyContent: 'space-between ',
        alignItems: 'center',       
      }}  >
 
 <button className='btn btn-outline-danger'>
 <Link  to="/register"
 style={{
  textDecoration: 'none',
  color: 'white',
}} >   <i className="fas fa-user-plus"></i>
 </Link>
    </button>
    &nbsp;  
    <button className='btn btn-outline-danger '>   
 <Link  to="/presupuesto"
 style={{
  textDecoration: 'none',
  color: 'white',

}} > <i className="fas fa-file-invoice"></i>
  </Link>
    </button>


    </div>
     </div>
    </>
   
  )
}
