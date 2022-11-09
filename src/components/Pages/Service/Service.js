import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {

    const service = useLoaderData();
    const { img, price, title,description } = service;

    return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div>
                <h2 className="font-semibold my-3 text-center text-2xl text-cyan-600">{title}</h2>
                <img style={{width: '70%',margin: '0 auto'}} src={img} alt="services" />
            </div>
            
            <div className="card-body">
                
                
                <p className='text-2xl'>
                    {description }
                </p>

                <p className='text-2xl font-semibold text-orange-500'>Price: ${price}</p>
                <button className="btn bg-cyan-500">Book Your Appointment</button>
            
            </div>
    </div>
    );
};

export default Service;