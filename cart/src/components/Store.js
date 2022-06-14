import React, { useContext } from 'react';

// shared
import Products from "../shared/Products"

// Context
import {ProductContext} from "../context/ProductContextProvider"

const Store = () => {

    const products = useContext(ProductContext)

    return (
        <div>
            {
                products.map(product =>
                    <Products 
                    key={product.id}
                    productsData={product}
                    />
                )
            }
        </div>
    );
};

export default Store;