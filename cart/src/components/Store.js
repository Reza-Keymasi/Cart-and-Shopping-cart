import React, { useContext } from 'react';

// shared
import Products from "../components/shared/Products"

// Context
import {ProductContext} from "../context/ProductContextProvider"

const Store = () => {

    const products = useContext(ProductContext)

    return (
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
            {
                products.map(product =>
                    <Products 
                    key={product.id}
                    productData={product}
                    />
                )
            }
        </div>
    );
};

export default Store;