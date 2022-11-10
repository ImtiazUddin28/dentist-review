import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import CardReview from '../MyReview/CardReview';

const Service = () => {

    const service = useLoaderData();
    const {_id, img, price, title,description } = service;
    const { user } = useContext(AuthContext);

    const [reviews, setReviews] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/reviews')
        .then(res =>res.json())
        .then(data => setReviews(data))
    }, []);

  
    const remaining = reviews.filter(rvw => rvw.service === _id);
    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.firstName.value;
        const img = form.photoURL.value;
        const email = user?.email || 'unregistered';
        const text = form.message.value;
        const lastUpdated = new Date();


        const review = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            img,
            text,
            lastUpdated

        }
        
        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
            
                    alert('Your review added successfully')
                    
                    form.reset();
                    
                    
                }
            })
            .catch(er => console.error(er));
    
    
}
    
    return (
        <div>
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
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Customer Activity</th>
                            <th>Service Name</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        
                        
                        remaining.map(review => <CardReview
                            key={review._id}
                            review={review}
                        ></CardReview>)
                    }
                    </tbody>
                </table>
            </div>
            <div className='my-3'>
                <form onSubmit={handlePlaceReview}>
                    <h2 className="text-4xl my-3">Please Review about: {title}</h2>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="firstName" type="text" placeholder="Name" className="input input-ghost w-full  input-bordered" />
                        <input name="photoURL" type="text" placeholder="Give Photo URL" className="input input-ghost w-full  input-bordered" />
                        <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                    {
                                user?.uid ?
                                    <>
                                      <input className='btn my-3 bg-cyan-500' type="submit" value="Submit Your Review" />  
                                        
                                    </>
                                    :
                                    <>
                                      <Link to='/login' className='btn my-3 bg-cyan-500'>Please login to add a review</Link>  
                                    </>
                            }
                    
                </form>
            </div>
            
        
        </div>
    );
};

export default Service;