import React, { useContext } from 'react';
import { Link } from "react-router-dom"

// context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import Cart from "../../assets/icons/Cart.svg"

const Navbar = () => {

    const { state } = useContext(CartContext)

    return (
        <div>
            <Link to="/products">Products</Link>
            <div>
               <Link to="/cart"> <img src={Cart} style={{width: "40px"}} alt="shop"/></Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;