import React from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from "../cart/Cart"
import useCart from '../../hooks/useCart'
import ReviewItem from '../reviewItem/ReviewItem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { Link, useHistory } from 'react-router-dom';

const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const history = useHistory()
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        deleteFromDb(key)
    }
    const handlePlaceOrder = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/shipping')
    }
    // function handleClick() {
    //     history.push("/shipping")
    // }

    console.log(cart)
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem
                        product={product}
                        key={product.key}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    
                        <button className='btn-regular' onClick={handlePlaceOrder}>proceed to Order</button>
                   
                </Cart>

            </div>


        </div>
    );
};

export default OrderReview;