import React from 'react';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    useTitle('Home')
    return (
        <div >
            <Banner></Banner>
            <About></About>
            <HomeServices></HomeServices>
            <Appointment></Appointment>  
        </div>
    );
};

export default Home;