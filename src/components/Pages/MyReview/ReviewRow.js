import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName,customer, img, text ,service,status
    } = review;
    const [reviewservice, setReviewservice] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewservice(data));
    }, [service])

    

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-red-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>                       
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                        <img style={{width: '260px'}} src={img} alt=""></img>
                            
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                            {
                                reviewservice?.img && 
                                <img style={{width: '60px'}} src={reviewservice.img} alt="Avatar Tailwind CSS Component" />
                            } 
                        <div className="text-sm opacity-50">{text}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
            </td>
            <th>
                <button 
                onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
            </th>
        </tr>
    );
};

export default ReviewRow;