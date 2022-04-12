import React from 'react';

const Service = ({ service }) => {
    const { name, img, rate } = service;
    return (
        <div className='container  col-4 g-5'>
            <div className='border text-center p-3 bg-info rounded'>
                <img width='400' src={img} alt="" className='img-fluid border border-3 border-warning rounded' />
                <h3>{name}</h3>
                <h5>Charge: ${rate}</h5>
                <button className='btn btn-warning w-50 fs-5'>Checkout</button>
            </div>
        </div>
    );
};

export default Service;