import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css";

// context
import { CartContext } from '../../context/CartContextProvider';

// Icons
import Cart from "../../assets/icons/Cart.svg"

const Navbar = () => {

    const { state } = useContext(CartContext)

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productsLink} to="/products">Products</Link>
                <div className={styles.iconContainer}>
                   <Link to="/cart"> <img src={Cart} style={{width: "40px"}} alt="shop"/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;