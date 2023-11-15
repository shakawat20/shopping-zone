import React from 'react';

const OrderTable = ({ orders,removeFromOrder }) => {
    console.log(orders)
    return (
        
            <div className="overflow-x-auto border">
                <table className="table table-lg table-pin-rows table-pin-cols">
                    <thead>
                        <tr>
                            
                            <td>no</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>price</td>
                            
                        
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index) => 
                                <tr>
                                    <th>{index+1}</th>
                                    <td>{order?.user?.displayName}</td>
                                    <td>{order?.user?.email}</td>
                                    <td>{order?.price}</td>
                                 
                                    <td>
                                        <button onClick={()=>removeFromOrder(order._id)}>Remove</button>
                                    </td>
                                    
                                </tr>
                            )
                        }


                    </tbody>

                </table>
            </div>
      
    );
};

export default OrderTable;