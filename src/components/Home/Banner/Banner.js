import React from 'react';
import { Link } from 'react-router-dom';
import imgOne from '../../../assets/images/treatment.jpg'
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${imgOne})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-cyan-500 ">Let Us Brighten Your Smile</h1>
      <p className="mb-5 ">A smile is your unique accessory and pearly white teeth make it even more beautiful. If you want to keep the aching tooth away and want to keep those pearly whites intact, taking good care of your teeth is a must.</p>
      <Link to='/services' className="btn btn-primary">Get Service</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;