import { useState, useEffect } from 'react'
import { getStoredCart } from '../utilities/fakeDb'
const useCart = products => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedCart = getStoredCart()
        const keys = Object.keys(savedCart)
        fetch('https://shopping-zone-server-loq2zoo8v-shakawat20.vercel.app/products/byKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                if (products.length) {
                    const savedCart = getStoredCart()
                  
                    const storedCart = []
                    for (const key in savedCart) {
                        const addedProduct = products.find(product => product.key === key);
                        if (addedProduct) {
                            const quantity = savedCart[key];
                            addedProduct.quantity = quantity;
                            storedCart.push(addedProduct)
                        }
                    }
                    setCart(storedCart)
                }
            })

    }, [products])
    return [cart, setCart]


}
export default useCart;












