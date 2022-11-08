import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import imgtwo from '../../../assets/images/dentist-man.jpg'
const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="flex bg-base-200 my-6">
            <div className="">
                <img src={imgtwo} className="border-r-4" alt='' />
            </div>
            <div className="card-body">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-cyan-500 ">Book Your Visit At TeethFair</h1>
                    <p className="mb-5 ">A smile is your unique accessory and pearly white teeth make it even more beautiful. If you want to keep the aching tooth away and want to keep those pearly whites intact, taking good care of your teeth is a must.</p>
                </div>
                <div className="form-control">
            <label className="label">
                <span className="label-text">Your Name</span>
            </label>
            <input type="text" placeholder=" " className="input border-info" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="" className="input border-info" />
                </div>
                <div className="container flex my-4">
                    <div style={{width: '50%'}}>
                        <select className="select select-info flex w-full max-w-xs">
                        <option disabled selected>Select Your Service</option>
                        <option>English</option>
                        <option>Japanese</option>
                        <option>Italian</option>
                        <option>English</option>
                        <option>Japanese</option>
                        <option>Italian</option>
                        </select>
                    </div>
                    <div style={{width: '50%'}}>
                    <DatePicker className="select select-info w-full max-w-xs" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="form-control mt-6">
                <button className="btn bg-cyan-500">Book Your Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;