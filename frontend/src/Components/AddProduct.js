import React from "react";

const AddProduct = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const AddProduct=async()=>{
        console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        console.warn(userId);
        let result= await fetch("http://localhost:8000/add",{
            method:"post",
            body:JSON.stringify({name,price,category,company,userId}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
            result = await result.json();
            console.warn(result);
        
    }
    return (
        <div>
            <h1>AddProduct</h1>
            <input className='inputBox' type="text" placeholder='Enter product name'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />
            <input className='inputBox' type="text" placeholder='Enter price'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            <input className='inputBox' type="text" placeholder='Enter product category'
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
            <input className='inputBox' type="text" placeholder='Enter product company'
                value={company} onChange={(e) => { setCompany(e.target.value) }}
            />

            <button onClick={AddProduct} className='appButton' type='button'>Add Product</button>
        </div>
    )
}

export default AddProduct;