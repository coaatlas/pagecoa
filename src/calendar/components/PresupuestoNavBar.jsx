import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../hooks';

export const PresupuestoNavBar = () => {

  const { user  } = useAuthStore();


  return (
    <>
    <div className='navbar navbar-dark bg-dark mb-4 px-4' >
    <span  >
      <i className='fas fa-calendar-alt ' >&nbsp;{user.name} </i>      
    </span>
   
 
      <div
      style={{
        display: 'flex',
        justifyContent: 'space-between ',
        alignItems: 'center',       
      }}  >

<Link  to="/presupuesto"

 style={{
  textDecoration: 'none',
  color: 'white',
}} ><i className="fas fa-file-invoice"></i>
  </Link>
 
    &nbsp;    &nbsp; 

 <Link  to="/productos" 
 style={{
  textDecoration: 'none',
  color: 'white',
}} ><i className="fas fa-plus"></i>
  </Link>
 
    &nbsp;    &nbsp;  

 
 <Link  to="/clientes" 
 style={{
  textDecoration: 'none',
  color: 'white',
}} > <i className="fas fa-plus fa-users"></i>
   </Link>

    &nbsp;      &nbsp; 
 
 
 <Link  to="/calendar"
 style={{
  textDecoration: 'none',
  color: 'white',
}} >   <i className="fas fa-calendar-alt "></i>
   </Link>
    

    &nbsp;     

    </div>
     </div>
    </>
   
  )
}
