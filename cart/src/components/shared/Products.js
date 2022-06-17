import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

// Helpers
import { shorten, isInCart, quantityCount } from "../../helpers/Functions"


// Context
import { CartContext } from "../../context/CartContextProvider"

// Icons
import Delete from "../../assets/icons/Delete.svg";


const Products = ({productData}) => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div>
            <img src={productData.image} alt="Product" style={{width:"200px"}} />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}</p>
            <div>
                <Link to={`/products/${productData.id}`}>Details</Link>
                <div>
                {quantityCount(state, productData.id) === 1 &&
                    <button onClick={() => dispatch({type:"DECREASE", payload: productData})}>-</button>}
                    {quantityCount(state, productData.id) > 1 &&
                    <button onClick={() => dispatch({
                        type:"REMOVE_ITEM",
                        payload: productData
                        })}>
                        <img src={Delete} alt="delete" />
                    </button>}
                    {
                        isInCart(state, productData.id) ?
                        <button onClick={() =>dispatch({type: "INCREASE", payload: productData})}>+</button>:
                        <button onClick={() =>dispatch({type: "ADD_ITEM", payload: productData})}>Add To Cart</button>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Products;