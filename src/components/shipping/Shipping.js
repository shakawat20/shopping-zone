import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { getStoredCart } from '../../utilities/fakeDb';
import "./shipping.css";

const Shipping = () => {
    const { register, handleSubmit, reset,formState: { errors } } = useForm();
    
    const { user } = useAuth()

    const onSubmit = data => {
        const savedCart = getStoredCart()
        data.order = savedCart;
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
               if(result.insertedId){
                alert('order proceed successfully')
                reset()
               }
            })

    }
   
    return (
        <div style={{position:"relative",top:"100px"}}>


            <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">

                <input defaultValue={user.displayName}    {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input defaultValue="" {...register("address")} />

                {errors.email && <span className='error'>This field is required</span>}

                <input defaultValue="" {...register("address")} />
                <input defaultValue="" {...register("city")} />
                <input defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>



        </div>
    );
};

export default Shipping;