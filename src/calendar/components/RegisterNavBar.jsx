import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../hooks';

export const RegisterNavBar = () => {

  const { user  } = useAuthStore();


  return (
    <>
    <div className='navbar navbar-dark bg-dark mb-4 px-4' >
    <span  >
      <i className='fas fa-calendar-alt fa-2x' >&nbsp;{user.name} </i>      
    </span>
   
 
      <div
      style={{
        display: 'flex',
        justifyContent: 'space-between ',
        alignItems: 'center',       
      }}  >
 
 <button className='btn btn-outline-danger'>
 <Link  to="/calendar"
 style={{
  textDecoration: 'none',
  color: 'white',
}} >   <i className="fas fa-calendar-alt "></i>
  <span> Calendario </span> </Link>
    </button>

    &nbsp;     

    </div>
     </div>
    </>
   
  )
}
