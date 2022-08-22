import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import "./shipping.css";
const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data)}
const {user}=useAuth()
    return (
        <div>


            <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">

                <input defaultValue={user.displayName}    {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                <input defaultValue="" {...register("address")} />

                {errors.email && <span className='error'>This field is required</span>}

                <input defaultValue="" {...register("address")} />
                <input defaultValue="" {...register("city")} />
                <input defaultValue="" {...register("phone")} />
            </form>



        </div>
    );
};

export default Shipping;