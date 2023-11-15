import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (

        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  justify-center mt-12 ml-20" >
              
                {/* Page content here */}
                 <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                   
                    <li><Link to='/admin'>Order List</Link></li>
                    <li><Link to='/admin/manageInventory'>Manage Inventory</Link></li>

                </ul>

            </div>
        </div>

    );
};

export default Admin;