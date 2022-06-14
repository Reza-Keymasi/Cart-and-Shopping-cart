import React from 'react';

const Products = ({productsData}) => {
    return (
        <div>
            <img src={productsData.image} alt="Product" />
            <h3>{productsData.title}</h3>
            <p>{productsData.price}</p>
            <div>
                <a>Details</a>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;