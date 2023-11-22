import React from 'react';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  return (
    <div className="flex  justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 border rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your Password"
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
              Re-enter Password:
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Re-enter Password"
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className='flex justify-center'>
            <button
              type="submit"
              className="bg-blue-500 text-gray-300 font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="mt-4 text-center">
          Already have an account? 
        </p>
        <div className='text-center'>
             <Link to="/login" className="text-blue-500 text-center">Log in</Link>
        </div>
       
        <div className="mt-4 flex justify-center flex-col items-center">
            <div>
                  <span className="block mb-2">---------or-------</span>
            </div>
        
          <button className="bg-blue-500  border-gray-300 text-gray-700 py-2 px-4 rounded">
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
