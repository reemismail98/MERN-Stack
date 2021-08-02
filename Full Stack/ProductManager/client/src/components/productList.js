
import React from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ProductList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId);
                // navigate('/product');
            })
    }
    return (
        <div>
            {props.product.map((product, idx)=>{
                return <p key={idx}><Link to={product._id}>{product.title} </Link> 
            <button onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button>
            </p>
            })}
        </div>
    )
}
export default ProductList


    