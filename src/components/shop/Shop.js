import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb, getStoredCart } from '../../utilities/fakeDb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([])
    const [remove,setRemove]=useState(true)
    const [cart, setCart] = useCart()
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    //products to be rendered on the UI
    const [displayProducts, setDisplayProducts] = useState([])
    const size = 10;
    useEffect(() => {

        fetch(`https://shopping-zone-server.vercel.app/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setDisplayProducts(data.products)
                const count = data.count
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
                setRemove(true)

            });
    }, [page , remove])

    console.log(displayProducts)

    // useEffect(() => {


    //     if (products.length) {
    //         const savedCart = getStoredCart();
    //         const storedCart = []
    //         for (const key in savedCart) {

    //             const addedProduct = products.find(product => product.key === key);

    //             if (addedProduct) {
    //                 const quantity = savedCart[key]
    //                 addedProduct.quantity = quantity
    //                 storedCart.push(addedProduct)
    //             }
    //         }
    //         setCart(storedCart)
    //     }
    //     // console.log(savedCart)


    // }, [products])

    const handleAddToCart = (product) => {
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
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setDisplayProducts(matchedProducts)
        console.log(matchedProducts.length)
    }
    const removeProduct = (id) => {
        fetch(`https://shopping-zone-server.vercel.app/product/${id}`,
        {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          
        }
        )
        setRemove(false)
   


    }

    return (
        <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="search-container base-300 ">
                <input type="text" className='pl-2'
                    placeholder='search product'
                    onChange={handleSearch}
                />
            </div>
            <div className="shop-container">
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-4'>
                    {
                        displayProducts.map(data => <Product
                            product={data}
                            key={data.key}
                            handleAddToCart={handleAddToCart}
                            removeProduct={removeProduct}

                        ></Product>)
                    }
                    <br />
                    <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => <button

                                className={number === page ? 'selected' : ''}
                                key={number}
                                onClick={() => setPage(number)}

                            >{number + 1}</button>)
                        }
                    </div>

                </div>
                <div className='cart-container'>
                    <Cart cart={cart}>
                        <Link to='/review'>
                            <button className='btn'>review Item</button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;