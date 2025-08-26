import { Box, CircularProgress, LinearProgress, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { customFetch } from '../../../database/customfech';
import itemData from '../../../database/datadb';
import { BannerComponent } from '../../../ui';

import PropTypes from 'prop-types';

export const LayoutsGaleria = ({ children, titulo, subtitulo, descrip, titulo1, titulo2, titulo3, descrip1, descrip2, descrip3 }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        customFetch(2000, itemData).then((data) => setItems(data));
    }, []);

    if (items.length === 0) {
        return (
            <>

                <br />
                <BannerComponent descrip="Ofrecemos soluciones integrales instalando pisos y revestimientos vinilicos en todo el País." />

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <CircularProgress
                        color="secondary"
                        size={60}
                        thickness={2}
                    />
                </Box>
            </>
        );

    }
    else {
        return (
            <>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="row g-5">

                                    {children}

                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <p className="fw-medium text-uppercase text-primary mb-2">{titulo}</p>
                                <h1 className="display-5 mb-4">{subtitulo}</h1>
                                <p className="mb-4">
                                    {descrip}
                                </p>
                                <div className="row gy-4">
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                                <i className="fa fa-check text-white"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h4>{titulo1}</h4>
                                                <span>{descrip1}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                                <i className="fa fa-check text-white"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h4>{titulo2}</h4>
                                                <span>{descrip2}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                                <i className="fa fa-check text-white"></i>
                                            </div>
                                            <div className="ms-4">
                                                <h4>{titulo3}</h4>
                                                <span>{descrip3}</span>
                                            </div>
                                        </div>
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

LayoutsGaleria.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    descrip: PropTypes.string.isRequired,
    titulo1: PropTypes.string.isRequired,
    titulo2: PropTypes.string.isRequired,
    titulo3: PropTypes.string.isRequired,
    descrip1: PropTypes.string.isRequired,
    descrip2: PropTypes.string.isRequired,
    descrip3: PropTypes.string.isRequired,
}

