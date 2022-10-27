import React from "react";
import './styles.css'
import '../CartWidget'
import CartWidget from "../CartWidget";
const NavBar = () => {
    return (
        <ul>


            <li><a href="#home"> Bosque Dulce</a></li>
            <li><a href="#aboutUs">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">Any Questions?</a></li>

            <CartWidget/>



        </ul>
    )
}

export default NavBar;
