
import React from 'react'
import { Link } from '@reach/router';

const ProductList = (props) => {
    return (
        <div>
            {props.product.map((product, idx)=>{
                return <Link to={product._id} key={idx}><p>{product.title} </p></Link> 
            })}
        </div>
    )
}
export default ProductList
