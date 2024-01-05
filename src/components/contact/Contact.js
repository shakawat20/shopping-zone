import React from 'react';
import { useForm } from 'react-hook-form';


const Contact = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <div className='border border-gray-500 rounded-lg mt-10 w-3/4 pl-12 pt-12 pb-12 h-2000 m-auto mb-10' >
            <form className='flex flex-row justify-center ' onSubmit={handleSubmit(onSubmit)}>


                <div className='mr-3 '>

            

                    <h1 className='text-2xl'> Greetings! How may I be of service to you today? Don't <br /> hesitate to ask any questions or let me know how I can assist you.</h1>
                    <div className='mt-10'>
                        <div className='flex items-center p-5' >
                            <i className="fa-solid fa-location-dot pr-5"></i>
                            <h1>Dhaka,Bangladesh</h1>

                        </div>
                        <div className='flex items-center p-5'>
                            <i className={`fa-solid fa-envelope pr-5`}></i>
                            <h1>shakawat.cse20@gmail.com</h1>

                        </div>
                        <div className='flex items-center p-5'>
                        <i class="fa-sharp fa-solid fa-phone pr-5 "></i>
                            <h1>+8801609431059</h1>

                        </div>


                    </div>
                </div>


                <div>
                    <input placeholder='Name' className="input border border-gray-300 lg:w-full mt-3 mr-3 max-w-xs "  {...register("name")} />
                    <input placeholder='Email' className="input border border-gray-300 lg:w-full mt-3 max-w-xs "  {...register("email")} />
                    <input placeholder='Message' className="input border border-gray-300 lg:w-full mt-3  max-w-xs h-40"  {...register("message")} />

                    <input className="block btn mt-3" type="submit" />
                </div>





            </form>
        </div>
    );
};

export default Contact;