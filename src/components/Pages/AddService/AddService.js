import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const addNewService = event => {
        event.preventDefault();
        const form = event.target;
        const id = form.id.value;
        const title = form.title.value;
        const img = form.photoURL.value;
        const price = form.price.value;
        const description = form.description.value;
        const lastUpdated = new Date();

        const service = {
            id,
            title,
            img,
            price,
            description,
            lastUpdated
        }
        
        // if(phone.length > 10){
        //     alert('Phone number should be 10 characters or longer')
        // }
        // else{

        // }

        fetch('https://dentist-review-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
            
                    alert('Your service added successfully')
                    
                    form.reset();
                    
                    
                }
            })
            .catch(er => console.error(er));
    
    
}
    return (
        <div>
            <div className='my-3'>
                <form onSubmit={addNewService}>
                    <h2 className="text-4xl my-3">Only Admin can add service </h2>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="id" type="text" placeholder="id" className="input input-ghost w-full  input-bordered" />
                        <input name="title" type="text" placeholder="Service Title" className="input input-ghost w-full  input-bordered" />
                        <input name="photoURL" type="text" placeholder="Give Photo URL" className="input input-ghost w-full  input-bordered" />
                        <input name="price" type="text" placeholder="price" className="input input-ghost w-full  input-bordered" />
                    </div>
                    <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Describe about service" required></textarea>

                    {
                                user?.uid ?
                                    <>
                                      <input className='btn my-3 bg-cyan-500' type="submit" value="Add Your Service" />  
                                        
                                    </>
                                    :
                                    <>
                                      <Link to='/login' className='btn my-3 bg-cyan-500'>Please login to add a service</Link>  
                                    </>
                            }
                    
                </form>
            </div>
        </div>
    );
};

export default AddService;