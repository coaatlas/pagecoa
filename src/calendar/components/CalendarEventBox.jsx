import React from 'react'

export const CalendarEventBox = ({event}) => {
    const {title, notes, amount ,  user} = event;

  return (
    <> 
    <div className="container">
    <div className="row">
    <div className="col-md-6">
    <div className="card"
    style={{width: '60rem',
    height: '9rem',
    backgroundColor: '#FF5E14',
    borderRadius: '7px',
    borderBlockColor: 'black',
    marginTop: '-2px',
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
    >{title}</h5>
    <p className="card-text"
    style={{color: 'black',
    fontWeight: 'bold',
    fontSize: '13px'}}

    >{notes}</p>

    <p className="card-text"
    style={{color: 'black',
    fontWeight: 'bold',
    fontSize: '13px'}}
    >{amount}</p>
    <p className="card-text"
    style={{color: 'black',
    fontWeight: 'bold',
    fontSize: '13px'}}
    >{user.name}</p>
   
  
    </div>
    </div>
    </div>
    </div>
    </div>

    
    
    </>
   
  )
}
