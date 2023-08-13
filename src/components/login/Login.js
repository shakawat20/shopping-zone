import React from 'react';
import { Link, useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
   
import './login.css'

const Login = () => {

    const { signInUsingGoogle,user } = useAuth();
    console.log(user.email)
    const location = useLocation()
    
    const history = useHistory()
    const redirect_uri = location.state?.from || '/shop';
    if(user?.email){
       return history.push(redirect_uri)
     }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => { 
                history.push(redirect_uri)
            })
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