import { Box, CircularProgress} from '@mui/material';
import React, { useEffect, useState } from 'react'

import { customFetch } from '../../database/customfech';
import { BannerComponent, BannerContact } from '../../ui';
import video1 from '../../assets/img/villamartelli/videovillamartelli.mp4';
import video2 from '../../assets/img/villamartelli/videovillamartelli.mp4';
import video3 from '../../assets/img/tortuguitas/1.mp4';
import video4 from '../../assets/img/tortuguitas/2.mp4';
import video5 from '../../assets/img/tortuguitas/3.mp4';
import video6 from '../../assets/img/tortuguitas/4.mp4';
import video7 from '../../assets/img/bavio/1.mp4';
import video8 from '../../assets/img/bavio/2.mp4';
import video9 from '../../assets/img/bavio/3.mp4';
import video10 from '../../assets/img/hospinavarro/1navarro.mp4';
import video11 from '../../assets/img/hospinavarro/2navarro.mp4';

import './videocontenido.css'


export const CoaVideoContenido = () => {

    const [items, setItems] = useState([]); 

    useEffect(() => {
        customFetch(2000,'coavideo').then((data) => setItems(data));
     }, []);
  
    if (items.length === 0) {
        return (
         <> 
       <br/>
 <BannerComponent  descrip="Ofrecemos soluciones integrales instalando pisos y revestimientos vinilicos en todo el País."/>       
  
 <Box sx={{ display: 'flex' ,
  justifyContent: 'center',
  alignItems: 'center',
}}>
      <CircularProgress color="secondary" size={40}  thickness={2}  />
    </Box>            
          </>
        );        
    } else{
 
  return (    
   <>    
  
  <div className="container " data-wow-delay="0.1s">
      <div className="container ">
          <div className="row justify-content-center">
          <h2 className="mb-4">Nuestros Videos</h2>

          <div className="col-md-4">                
                 <div className='vidContain'>
                        <div className='vid'>
                               <video width="370" height="400" autoPlay={true} loop={false} muted={true} >
                                                 <source src={video10} type="video/mp4" ></source>
                                </video>                  
                        </div>           
                    </div>                      
              </div>


          <div className="col-md-4">                
                 <div className='vidContain'>
                        <div className='vid'>
                               <video width="370" height="400" autoPlay={true} loop={false} muted={true} >
                                                 <source src={video11} type="video/mp4" ></source>
                                </video>                  
                        </div>           
                    </div>                      
              </div>

          <div className="col-md-4">                
                 <div className='vidContain'>
                        <div className='vid'>
                               <video width="370" height="400" autoPlay={true} loop={false} muted={true} >
                                                 <source src={video1} type="video/mp4" ></source>
                                </video>                  
                        </div>           
                    </div>                      
              </div>


              <div className="col-md-4">                
                         <div className='vidContain'>
                          <div className='vid'>
                                <video width="370" height="400"  autoPlay={true} loop={false}  muted={true}  >                    
                                  <source src={video7} type="video/mp4"  ></source>
                                </video>                  
                         </div>           
                    </div>                      
              </div>

              <div className="col-md-4">                
                         <div className='vidContain'>
                          <div className='vid'>
                                <video width="370" height="400"  autoPlay={true} loop={false}  muted={true}  >                    
                                  <source src={video8} type="video/mp4"  ></source>
                                </video>                  
                         </div>           
                    </div>                      
              </div>

              <div className="col-md-4">                
                         <div className='vidContain'>
                          <div className='vid'>
                                <video width="370" height="400"  autoPlay={true} loop={false}  muted={true}  >                    
                                  <source src={video9} type="video/mp4"  ></source>
                                </video>                  
                         </div>           
                    </div>                      
              </div>




              <div className="col-md-4">                
                 <div className='vidContain'>
                        <div className='vid'>
                               <video width="340" height="400" autoPlay={true} loop={false} muted={true} >
                                                 <source src={video3} type="video/mp4" ></source>
                                </video>                  
                        </div>           
                    </div>                      
              </div>

              <div className="col-md-4">                
                 <div className='vidContain'>
                        <div className='vid'>
                               <video width="370" height="400" autoPlay={true} loop={false} muted={true} >
                                                 <source src={video4} type="video/mp4" ></source>
                                </video>                  
                        </div>           
                    </div>                      
              </div>

              <div className="col-md-4">                
                 <div className='vidContain'>
                        <div className='vid'>
                               <video width="340" height="400" autoPlay={true} loop={false} muted={true} >
                                                 <source src={video5} type="video/mp4" ></source>
                                </video>                  
                        </div>           
                    </div>                      
              </div>

              <div className="col-md-4">                
                 <div className='vidContain'>
                        <div className='vid'>
                               <video width="340" height="400" autoPlay={true} loop={false} muted={true} >
                                                 <source src={video6} type="video/mp4" ></source>
                                </video>                  
                        </div>           
                    </div>                      
              </div>





          </div>
      </div>
  </div>
   
   </>
  )
}
}