import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';





const Product = (props) => {

    const element = <FontAwesomeIcon icon={faCoffee} />

    const { name, img, stock, price, seller, star } = props.product
    // console.log(props.product)
    // console.log(props)

    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className='product-name'>{name}</h2>
                <p><small>by:{seller}</small></p>
                <p>Price :{price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className='btn-regular' onClick={() => props.handleTocart(props.product)}>{element} add to cart</button>
                <br />
                <Rating

                    initialRating={star}
                    fullSymbol="fa-solid fa-star icon-color"
                    emptySymbol="fa-regular fa-star icon-color"


                ></Rating>
            </div>
        </div>
    );
};

export default Product;