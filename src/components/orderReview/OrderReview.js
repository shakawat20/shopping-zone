import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from "../cart/Cart"
import useCart from '../../hooks/useCart'
import ReviewItem from '../reviewItem/ReviewItem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakeDb';
import { Link, useHistory } from 'react-router-dom';
import Payment from '../payment/Payment';
import { set } from 'react-hook-form';

const OrderReview = () => {

    const [cart, setCart] = useCart();
    const [deleteItem, setDeleteItem] = useState(false)
    const history = useHistory()

    const handleDelete = (key) => {
        const newCart = cart.filter(product => product.key !== key)

        setCart(newCart)
        deleteFromDb(key)
    }
    const handleRemove = key => {
        const product = cart.find(product => product.key === key);
        const index = cart.findIndex(product => product.key === key);

        if (product.quantity >0) {

            product.quantity = product.quantity - 1;

            let newCart = cart.filter(product => product.key !== key);
            console.log(newCart)
            newCart.splice(index, 0, product)
        

            setCart(newCart)
        }
        if (product.quantity == 0) {

            const newCart = cart.filter(product => product.key !== key)

            setCart(newCart)
            deleteFromDb(key)
        }
    }
    // const handlePlaceOrder = () => {
    //     // setCart([]);
    //     // clearTheCart();
    //     history.push('/shipping')

    // }
    // // function handleClick() {
    // //     history.push("/shipping")
    // // }


    console.log(cart)
    return (
        <div className='shop-container' >
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-4' style={{ position: "relative", top: "100px" }}>
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.key}
                        handleRemove={handleRemove}
                        setDeleteItem={setDeleteItem}
                        handleDelete={handleDelete}
                    ></ReviewItem>)
                }
            </div>
            <div style={{ position: "relative", top: "100px" }} >
                <Cart cart={cart}>

                    <button className='btn'><Link to="/payment">proceed to Order</Link></button>

                </Cart>

            </div>


        </div>
    );
};

export default OrderReview;