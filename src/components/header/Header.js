import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import logo from '../../images/logo.png';
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth()
    const navigation = <>
        <li>
            <Link to="/shop">Shop</Link>
        </li>
        <li>
            <Link to="/review">Order Review</Link>
        </li>
        <li>
            <Link to="/inventory"> Manage Inventory</Link>
        </li>
    
    </>
    return (
        <div className="align" >

            <div className="navbar bg-base-100"style={{position:"fixed", zIndex: "1"}}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navigation
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navigation
                        }
                    </ul>
                </div>
                <div className="navbar-end" style={{paddingRight:"20px"}}>
                    
                              {
                                user.email ?
                                    <button onClick={logOut}>log out</button>
                                    :
                                    <Link to="/login"> Login</Link>
                            }
                    
                </div>
            </div>







        </div>



    );
};

export default Header;



