import React from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
   
import './login.css'

const Login = () => {
    const { signInUsingGoogle, user } = useAuth();
    console.log(user.email);
    const location = useLocation();
    const navigate = useNavigate(); 
    // Use the useNavigate hook for navigation
   

    const redirect_uri = location.state?.from || '/shop';
    console.log(redirect_uri)

    if (user?.email) {
        navigate(redirect_uri); // Navigate to the intended location
        return null; // Return null to handle navigation
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => { 
                navigate(redirect_uri); // Navigate after successful login
            });
    }
    return (
        <div className='login-form'>
            <div className='mt-32'>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>new to ema-john? <Link to="/register">Create Account</Link></p>

                <div>------or------</div>
                <button className='btn-regular'
                    onClick={handleGoogleLogin}
                > google sign In</button>
            </div>
        </div>
    );
};

export default Login;