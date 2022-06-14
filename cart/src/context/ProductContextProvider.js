import React, { useState, useEffect, createContext } from 'react';


// src
import { getProducts } from "../services/API";


const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setProducts(await getProducts());
        }

        fetchAPI();
    }, [])

    
    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;