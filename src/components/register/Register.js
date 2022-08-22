import React from 'react';
import { Link } from 'react-router-dom';
import './register.css'

const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <h2>Register</h2>
                <form onSubmit="">
                    <input type="text" name='' id='' placeholder='Your Email' />
                    <br />
                    <input type="password" name='' id='' placeholder='Your Password' />
                    <br />
                    <input type="password" name='' id='' placeholder='Re-enter Password' />
                    <br />
                    <input type="submit" value="Submit" />


                </form>
                <p>Already have an account?<Link to="/login">Log in</Link></p>
                <div>---------or-------</div>
                <button className='btn-regular'>Google sign in</button>
            </div>
        </div>
    );
};

export default Register;