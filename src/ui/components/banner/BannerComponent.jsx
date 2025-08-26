import React from 'react'
import { BannerTelefonos } from './BannerTelefonos'

export const BannerComponent = ({descrip}) => {
  return (
    <section className="section ">
    <div className="container-fluid page-header   py-5 mb-5  ">
        <div className="row">
            <div className="col-md-12  text-white">
          
                <div className="text-white ">
             
                    <h3 className="text-white "

                    style={{fontSize: "0.9rem", fontWeight: "bold", lineHeight: "1.2", marginBottom: "0.5rem", marginTop: "0.5rem"}}


                    >{descrip}</h3>
                    <BannerTelefonos />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
