import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import logo from '../../images/logo.png'
import './Header.css'


const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <div className="align"> 
           
            <img src={logo} className="logo" alt="" />
            <nav className=''>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory"> Manage Invantory</Link>

                {
                    user.email ?
                    <button onClick={logOut}>log out</button>
                :
                <Link to="/login"> Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;