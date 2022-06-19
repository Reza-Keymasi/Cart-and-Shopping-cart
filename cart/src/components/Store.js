import React, { useContext } from 'react';
import styles from "./Store.module.css";

// shared
import Products from "../components/shared/Products"

// Context
import {ProductContext} from "../context/ProductContextProvider"

const Store = () => {

    const products = useContext(ProductContext)

    return (
        <div className={styles.container}>
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