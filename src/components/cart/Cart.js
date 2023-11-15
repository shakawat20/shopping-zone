import React from 'react';

const Cart = (props) => {
    let sum = 0;
    let totalQuantity = 0;


    for (const product of props.cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        console.log(props.cart)

        sum = sum + product.price * product.quantity
        totalQuantity = totalQuantity + product.quantity
    }

    return (
        <div style={{ position: "fixed" }} >
            <h3>Order summary</h3>
            <h5>Items Ordered: {totalQuantity} </h5>
            <h5>cost : {sum.toFixed(2)}</h5>
            {
                props.children
            }

        </div>
    );
};

export default Cart;