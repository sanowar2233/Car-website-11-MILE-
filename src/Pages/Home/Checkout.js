import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../UserInfo/AuthProvider';

const Checkout = () => {
    const {_id,title, price} =useLoaderData()
    const {user}= useContext(AuthContext)

    const handlePlaceOrder=event=>{
        event.preventDefault();
        const form=event.target;
        const name=`${form.firstName.value} ${form.lastName.value}`
        const email=user?.email || 'unregistered'
        const message=form.message.value;
        const phone= form.phone.value;

        const order={
            service:_id,
            serviceName:title,
            price,
            customer: name,
            email,
            phone,
            message

        }
        // if(phone.length > 10){
        //     alert('phone number should be 10 character')
        // }

        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('order placed')
                form.reset();
            }
        })
        .catch(err=>console.error(err))
        
    }


    return (
        <div>
           <form  onSubmit={handlePlaceOrder}>
           <h2 className='text-4xl mb-10'>{title}</h2>
            <h4 className='text-3xl mb-10'>{price}</h4>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
            <input name='firstName' type="text" placeholder="First Name" className="input input-ghost input-bordered " />
            <input name='lastName' type="text" placeholder="Last Name" className="input input-ghost input-bordered " />
            <input name='phone' type="text" placeholder="Your Phone" className="input input-ghost input-bordered " />
            <input name='email' type="text" className="input input-ghost input-bordered " placeholder="Your Email" defaultValue={user?.email} readOnly />

            <textarea name='message' className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>

            <button className="btn">place your order</button>
            
            </div>
           
           </form>


         </div>
           
    );
};

export default Checkout;