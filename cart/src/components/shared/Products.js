import React from 'react';
import { Link } from 'react-router-dom'

// Helpers
import { shorten } from "../../helpers/Functions"


const Products = ({productData}) => {
    return (
        <div>
            <img src={productData.image} alt="Product" style={{width:"200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;