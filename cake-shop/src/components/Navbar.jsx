import React, { Component } from 'react';
import "../styles/navbar.css";

class Navbar extends Component{
    render(){
        return(
            <div className='cs-nav-bar-main-div'>
                <div className='cs-logo'>
                    <img src='/images/cake_shop_logo.png' alt='Cake Shop' />
                </div>
                <div className='cs-nav-items'>
                    <a>Home</a>
                    <a>Our Story</a>
                    <a>Treats & Delights</a>
                    <a>Customers Love</a>
                    <a>Say Hello</a>
                </div>
                <div className='cs-sign-cart-div'>
                    <a>Sign in</a>
                    <img src='/images/cart.png' alt='Cart' />
                </div>
            </div>
        )
    }
}


export default Navbar;