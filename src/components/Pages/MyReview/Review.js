import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import ReviewRow from './ReviewRow';

const Review = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure,to delete this review?');
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                    alert('deleted successfully');
                    const remaining = reviews.filter(rvw => rvw._id !== id);
                    setReviews(remaining);
                }
            })
        }
    }
//Update section start


const handleUpdateUser = (id) =>{
    
    // console.log(user);
    fetch(`http://localhost:5000/reviews/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(reviews)
    })
    .then(res => res.json())
    .then(data => {
        if (data.modifiedCount > 0){
            alert('user updated')
            console.log(data);
        }
        
    })
}




//Update section end

    

    return (
        <div>
            <h2 className="text-5xl text-center my-2 text-cyan-500">You have {(reviews.length <1 )? "No": reviews.length} reviews</h2>
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
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}
                                handleUpdateUser={handleUpdateUser}
                               
                            ></ReviewRow>)
                        }
                        
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Review;
