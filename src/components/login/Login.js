import React, { useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
   
import './login.css'

const Login = () => {
    const { signInUsingGoogle, user } = useAuth();
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    const handleSubmit = (e) => {
        e.preventDefault();
      
        console.log('Email:', email);
        console.log('Password:', password);
        
      
      };




    return (
        <div className=" flex  justify-center ">
        <div className=" p-8 rounded shadow-md w-96 mt-24 border">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <form onSubmit={handleSubmit} className="mb-4 ">
            <label htmlFor="email" className="block text-white-700">Email:</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <br />
            <label htmlFor="password" className="block text-white-700">Password:</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
              required
            />
            <br />
            <div className='flex justify-center'> <button
              type="submit"
              className="bg-blue-500 mt-3 border hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button></div>
           
          </form>
  
          <div className='flex flex-col justify-center items-center'>
            <span>or</span>
            <br />
            <button
              onClick={handleGoogleLogin}
              className="border rounded border-blue text-gray py-2 px-4"
            >
              Sign In With Google
            </button>
            <br />
            <span>or</span>
            <Link to='/register'>
              <button
                className="border rounded border-blue text-gray py-2 px-4"
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Login;