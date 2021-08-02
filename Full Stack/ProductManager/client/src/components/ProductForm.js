import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/product/new', {
            title,
            price,
            description,
            })
            .then((res) => {
                console.log(res)
                setTitle('')
                setPrice('')
                setDescription('')
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label>
                    <input type="text" value = {title}  onChange={(e) => setTitle(e.target.value)}
                    />
                </p>
                <p>
                    <label>Price</label>
                    <input type="text" value = {price} onChange={(e) => setPrice(e.target.value)}
                    />
                </p>
                <p>
                    <label>Description</label>
                    <input type="text" value = {description} onChange={(e) => setDescription(e.target.value)}
                    />
                </p>
                <input type="submit" />
            </form>
        </>
    )
}

export default ProductForm