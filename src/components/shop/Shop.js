import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [dispalyProducts, setDisplayProducts] = useState([])

    useEffect(() => {

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setDisplayProducts(data)
            });
    }, [])

    useEffect(() => {


        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = []
            for (const key in savedCart) {

                const addedProduct = products.find(product => product.key === key);

                if (addedProduct) {
                    const quantity = savedCart[key]
                    addedProduct.quantity = quantity
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart)
        }
        // console.log(savedCart)


    }, [products])

    const handleTocart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        }
        else {
            product.quantity = 1;
            newCart = [...cart, product];

        }


        setCart(newCart)
        addToDb(product.key)
    }
    const handlesearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts)
        console.log(matchedProducts.length)
    }

    return (
        <div>
            <div className="search-container">
                <input type="text"
                    placeholder='search product'
                    onChange={handlesearch}
                />
            </div>
            <div className="shop-container">
                <div className='product-container'>
                    {
                        dispalyProducts.map(data => <Product
                            product={data}
                            key={data.key}
                            handleTocart={handleTocart}

                        ></Product>)
                    }

                </div>
                <div className='cart-container'>
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='btn-regular'>review Item</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;