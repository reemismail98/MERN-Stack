import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Update = (props) => {
    const {id} = props;
    const[title,setTitle]=useState('');
    const[price,setPrice]=useState('');
    const[description,setDescription]=useState('');

useEffect(()=>{
    axios.get('http://localhost:8000/api/product/'+ id)
    .then(res=>{
        console.log(res)
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
        
    })
},[])

const titleHandler=e=>{
    setTitle(e.target.value)
}

const updateProduct= e=>{
    e.preventDefault();
    axios.put('http://localhost:8000/api/product/'+ id, {
        title,
        price,
        description
    })
        .then(res => console.log(res));
}
    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label>
                    <input name='title' type="text" value = {title}  onChange={titleHandler}
                    />
                </p>
                <p>
                    <label>Price</label>
                    <input name='price'  type="number" value = {price} onChange={(e) => {setPrice(e.target.value)}}
                    />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" name='description' value = {description} onChange={(e) => {setDescription(e.target.value)}}
                    />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Update
