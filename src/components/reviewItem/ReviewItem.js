import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, key } = props.product;

    const { handleRemove, setDeleteItem, handleDelete } = props;

    return (
        <div className="card w-96 bg-base-100 shadow-xl" >
            <div className='flex flex-row-reverse'>
                <button className='btn' onClick={() =>

                    handleDelete(key)

                }>x</button>
            </div>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <button onClick={() => handleRemove(key)} className='btn'>Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;