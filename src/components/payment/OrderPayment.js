import React from 'react';
import Payment from './Payment';
import useAuth from '../../hooks/useAuth';
import Shop from '../shop/Shop';

const OrderPayment = () => {
    const { user, logOut } = useAuth();
    console.log(user)
    if(!user){
        return (<div>
            loading
        </div>)

    }
    return (
        <div style={{display:"flex",justifyContent:"center",height:"500px"}}  className="border-2  relative top-20 left-1/2 transform -translate-x-1/2 p-6 rounded-md shadow-md">
            <Payment></Payment>
        </div>
    );
};

export default OrderPayment;