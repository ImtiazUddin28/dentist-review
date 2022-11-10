import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';


const SignUp = () => {

    const [error, setError] = useState('');
   
    const { createUser,providerLogin, updateUserProfile} = useContext(AuthContext);
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }


    

    
    useTitle('Sign Up')
    return (

    <div  className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-col">
                <div className="text-center lg:text-center">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    
                </div>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body w-96">
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Photo Url</span>
                        </label>
                        <input name="photoURL" type="text" placeholder="Phot URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter email" required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Password" required className="input input-bordered" />
                        <label className="label">
                        <Link to='/login' className="label-text-alt link link-hover">Already have account,please login!</Link>
                        </label>
                        <p className="text-red-400">{error}</p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    
                    </div>
                    </div>
                </form>
                <button onClick={handleGoogleSignIn}  className='w-full btn btn-warring'> <FaGoogle className='m-3'></FaGoogle> Login with Google</button> 
            </div>
      </div>
       
        
      
    );
};

export default SignUp;
