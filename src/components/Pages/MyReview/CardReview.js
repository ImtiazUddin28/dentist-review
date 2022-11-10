import React from 'react';

const CardReview = ({review}) => {
    
    const {customer, img, text 
    } = review;
    return (
        <div>
           <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                        <img style={{width: '260px'}} src={img} alt=""></img>
                            
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{text}</div>
                    </div>
                </div>
            </td>
        
        </div>
    );
};

export default CardReview;