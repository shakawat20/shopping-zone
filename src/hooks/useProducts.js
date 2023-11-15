import { useEffect } from "react";
import { useState } from "react"



const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://shopping-zone-server.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))

    }, [])
    return [products, setProducts]

}


export default useProducts;



