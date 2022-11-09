import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = ({ service }) => {
    const { _id, img, price, title,description } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img style={{height: '200px'}} src={img} alt="services" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title font-semibold text-2xl text-cyan-600">{title}</h2>
                
                <p>
                    {
                        description.length > 100 ?
                            <>{description.slice(0, 100) + '...'} 
                            </>
                            :
                            description
                    }
                </p>

                <p className='text-2xl font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${_id}`}>
                        <button className="btn bg-cyan-500">Go Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;