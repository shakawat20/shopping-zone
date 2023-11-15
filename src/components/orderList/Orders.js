import React, { useEffect, useState } from 'react';
import OrderTable from './OrderTable';

const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [shouldRefetch, setShouldRefetch] = useState(true);

    useEffect(() => {
        if (shouldRefetch) {
            fetch('https://shopping-zone-server.vercel.app/orders')
                .then(res => res.json())
                .then(data => setOrders(data))
                .finally(() => setShouldRefetch(false));
        }
    }, [shouldRefetch]);



    const removeFromOrder = (id) => {
        fetch(`https://shopping-zone-server.vercel.app/orders/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            // Toggle the flag to trigger a refetch
            setShouldRefetch(prevValue => !prevValue);
        })
        .catch(error => {
            console.error('Error removing order:', error);
            // Handle errors if needed
        });
    }


    return (
        <div style={{ position: "relative", top: "-190px", left: "-30px" }}>
            <OrderTable orders={orders} removeFromOrder={removeFromOrder}></OrderTable>
        </div>
    );
};

export default Orders;