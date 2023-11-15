import React, { useEffect, useState } from 'react';
import {  useForm } from 'react-hook-form';

const ManageInventory = () => {
    const { handleSubmit, register, reset } = useForm();

    const onSubmit = async (data) => {


        const key = 'afe99fd855e83b22d793375fdc2f26eb'
        const img = data.file[0];
     

        const formData = new FormData();
        formData.append('image', img);

        fetch(`https://api.imgbb.com/1/upload?key=${key}`, {
            method: 'POST',
            body: formData,

        })
            .then(res => res.json())
            .then(imgUrl => {
                console.log(imgUrl)
                const info = {
                    img: imgUrl?.data?.url,
                    category: data?.category,
                    name: data?.name,
                    seller: data?.seller,
                    wholePrice: data?.wholePrice,
                    priceFraction: data?.priceFraction,
                    stock: data?.stock,
                    star: data?.star,
                    shipping: data?.shipping,
                    price:data?.price

                }
                
                
                    fetch('https://shopping-zone-server.vercel.app/inventory', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(info),
                    })
                        .then(res => res.json())
                        .then(data => console.log(data))

            });




        reset()
    }


    // useEffect(() => {
    //     fetch('https://localhost:5000/inventory', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(data),
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    // }, [data])

    return (
        <div className='h-full w-80 '>
            <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-10">
                <form className='w-80' onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Upload Image:</label>
                        <label htmlFor="file">
                            <h1 style={{ marginLeft: "8px" }}>Upload img</h1>
                        </label>
                        <input type="file" accept="image/*" id="file" {...register('file')} style={{ display: "none" }} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">category:</label>
                        <input
                            style={{ width: '200px', padding: '5px', height: "27px" }}
                            type="text" id="description" {...register('category')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">name</label>
                        <input
                            style={{ width: '200px', padding: '5px', height: "27px" }}
                            type="text" id="brand" {...register('name')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">seller</label>
                        <input
                            style={{ width: '200px', padding: '5px', height: "27px" }}
                            type="text" id="seller" {...register('seller')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Stock:</label>
                        <input
                            style={{ width: '200px', padding: '5px', height: "27px" }}
                            type="number" id="stock" {...register('stock')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">wholePrice</label>
                        <input
                            style={{ width: '200px', padding: '5px', height: "27px" }}
                            type="text" id="wholePrice" {...register('wholePrice')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">priceFraction</label>
                        <input
                            style={{ width: '200px', padding: '5px', height: "27px" }}
                            type="text" id="priceFraction" {...register('priceFraction')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">price:</label>
                        <input
                            style={{ width: '200px', padding: '5px', height: "27px" }}
                            type="number" id="price" {...register('price')}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">shipping:</label>
                        <input
                            style={{ width: '200px', padding: '5px', height: "27px" }}
                            type="number" id="shipping" {...register('shipping')}
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                        Submit
                    </button>
                </form>
            </div>
        </div>


    );
};

export default ManageInventory;