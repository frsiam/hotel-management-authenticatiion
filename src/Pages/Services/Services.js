import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <>
            <div className='container text-center my-5 text-primary'>
                <h1>Our Services</h1>
            </div>
            <div className='row container mx-auto my-5 pb-5'>
                {
                    data.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </>
    );
};

export default Services;