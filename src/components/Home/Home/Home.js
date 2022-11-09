import React from 'react';
import Services from '../../Pages/Services/Services';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='m-8'>
            <Banner></Banner>
            <Appointment></Appointment>
            <Services></Services>
        </div>
    );
};

export default Home;