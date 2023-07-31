import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';





const Product = (props) => {


    const element = <i class="fa-solid fa-cart-shopping"></i>


    const { name, img, stock, price, seller, star } = props.product
    // console.log(props.product)
    // console.log(props)

    return (


        <div className="card card-compact w-96 bg-base-100 shadow-xl m-3">
            <figure><img src={img} alt="Loading" /></figure>
            <div className="card-body">
                <h2 className='product-name'>{name}</h2>
                <p><small>by:{seller}</small></p>
                <p>Price :{price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                
                <Rating

                    initialRating={star}
                    fullSymbol="fa-solid fa-star icon-color"
                    emptySymbol="fa-regular fa-star icon-color"


                ></Rating>
                <div className="card-actions justify-end">
                    <button className='btn' onClick={() => props.handleAddToCart(props.product)}>{element} add to cart</button>
                </div>
            </div>

        </div>



    );
};

export default Product;