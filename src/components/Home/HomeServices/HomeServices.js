import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceDetails from '../../Pages/ServiceDetails/ServiceDetails';
const HomeServices = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/homeservices')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center mb-4 flex justify-between'>
                <h2 className="text-3xl font-semibold mb-3 text-cyan-500">Services To Excellence </h2>
                <Link to='/services'  className="btn bg-cyan-500">View All Services &gt;</Link>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceDetails
                        key={service._id}
                        service={service}
                    ></ServiceDetails>)
                }

   
            </div>
            
        </div>
    );
};


export default HomeServices;