import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Review from './Review';

const MyReview = () => {
    useTitle('My Review');
    return (
        <div>
            <Review></Review>
        </div>
    );
};

export default MyReview;