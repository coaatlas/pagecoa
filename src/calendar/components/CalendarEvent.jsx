
import { useAuthStore } from "../../hooks";

export const CalendarEvent = ({ event }) => {

    

    const { title,notes,amount,user } = event;

    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid);


    return (
        <> 
    <div className="container">
    <div className="row">
    <div className="col-md-6">
    <div className="card"
    style={{width: '60rem',
    height: '9rem',
    backgroundColor:  '#367CF7' ,
    borderRadius: '7px',
    borderBlockColor: 'black',
    marginTop: '2px',
    marginBottom: '5px',
    marginLeft: '-15px',
    marginRight: '5px',
    }}
    >
    <div className="card-body">
        
    <h5 className="card-title"
    style={{color: 'red',
    fontWeight: 'bold',
    fontSize: '14px'}}
    > <span   style={{color: 'black',
    fontWeight: 'bold',
    fontSize: '13px'}}
    >Titulo: </span>{title}</h5>

    <h5 className="card-text"
    style={{color: 'black',
    fontWeight: 'bold',
    fontSize: '13px'}}
    > <span   style={{color: 'black',
    fontWeight: 'normal',
    fontSize: '13px'}}
    >Descripción: </span>{notes}</h5>

   
    <p className="card-text"
    style={{color: 'black',
    fontWeight: 'bold',
    fontSize: '13px'}}
    > <span   style={{color: 'black',
    fontWeight: 'bold',
    fontSize: '13px'}}
    >monto: </span>{amount}</p>
   
    <p className="card-text"
    style={{color: 'black',
    fontWeight: 'bold',
    fontSize: '13px'}}
    > <span   style={{color: 'black',
    fontWeight: 'bold',
    fontSize: '13px'}}
    >ingresado por: </span>{user.name}</p>
   
  
    </div>
    </div>
    </div>
    </div>
    </div>

    
    
    </>
    )
}