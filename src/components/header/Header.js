import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

import './Header.css';
import useAdmin from '../../hooks/useAdmin';
import Loading from './Loading';



const Header = () => {
    const { user, logOut, auth } = useAuth()
    const [gUser, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    const { isAdmin, admin, adminLoading } = useAdmin(user);
    console.log(admin, isAdmin)

    const LogOut = () => {
        logOut()
        navigate('/')

    }

    if (loading || adminLoading) {
        <Loading></Loading>
    }
    const navigation = <>
        <li>
            <Link to="/shop">Shop</Link>
        </li>
        {
            isAdmin ?   <li>
            <Link to="/admin"> Admin</Link>
        </li>:  <li><Link to="/review">Order Review</Link></li>
        }
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </>



    return (
        <div className="align" style={{ position: "sticky", top: 1, zIndex: 99 }}>
        <div className="navbar bg-base-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                         navigation 
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">shoppingZone</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {
                     navigation 
                   }
                </ul>
            </div>
            <div className="navbar-end" style={{ paddingRight: "20px" }}>
                {user.email ? (
                    <button onClick={LogOut}>log out</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </div>
    </div>
    

    );
};

export default Header;



