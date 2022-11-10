import React, { useEffect, useState } from 'react';

const ReviewRow = ({ review, handleDelete, handleUpdateUser }) => {
    const { _id, serviceName,customer, img, text ,service,lastUpdated
    } = review;
    
    const [reviewservice, setReviewservice] = useState({})
    

    useEffect(() => {
        fetch(`https://dentist-review-server.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewservice(data));
    }, [service])

    const handleInputChange = event =>{
        event.preventDefault();
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...reviewservice}
        newReview[field] = value;
        setReviewservice(newReview);

    }
    
    return (
        <div>
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
                        <div className="text-sm w-72 ">{text}</div>
                        <div className="text-cyan-500">{ serviceName}</div>
                    </div>
                </div>
            </td>
            <td>
                {lastUpdated} 
            </td>
            <th>
               
                <div>
                <label onClick={() => handleUpdateUser(_id)} htmlFor="my-modal-5" className="btn">Update Review</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                    <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                    <form >
                <input onChange={handleInputChange}  type="text"
                name='name' placeholder='name' className='my-3 border-2 w-3/4 h-8' required />
                <br />
                <input onChange={handleInputChange} type="text"  name='address' placeholder='text' className='my-3 border-2 w-3/4 h-8' />
                <br />
                <input onChange={handleInputChange} type="text" bordered name="email" id="" className='my-3 border-2 w-3/4 h-8' placeholder='enter photoURL' required />
                <br />
                
                
            </form>
                        <div className="modal-action">
                        <label onClick={() => handleUpdateUser(_id)}htmlFor="my-modal-5" className="btn">Update?</label>
                        </div>
                    </div>
                    </div>
            {/* <form >
                <input onChange={handleInputChange}  type="text"
                defaultValue={customer}  name='name' placeholder='name' required />
                <br />
                <input onChange={handleInputChange} type="text" defaultValue={text} name='address' placeholder='text' required />
                <br />
                <input onChange={handleInputChange} type="text" defaultValue={img} name="email" id="" placeholder='img' required />
                <br />
                
                
            </form> */}
        </div>
            </th>
        </tr>
    
        
    </div>
    );
};

export default ReviewRow;