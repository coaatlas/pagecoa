import React from 'react'

export const BannerTelefonos = () => {
  return (
   <>
     <div className="row pt-1">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fa fa-envelope-open text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <p className="mb-2">Email us</p>
                                    <h5 className="mb-0 text-white">cubas_beto@hotmail.com</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                    <i className="fa fa-phone-alt text-white"></i>
                                </div>
                                <div className="ms-3">
                                    <p className="mb-2">Call us</p>
                                    <h5 className="mb-0 text-white">11-3313-8900 / 11-3324-9832 </h5>
                                </div>
                            </div>
                        </div>
                    </div>
   </>
  )
}
