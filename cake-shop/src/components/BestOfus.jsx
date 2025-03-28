import React, { Component } from 'react';
import support from '../assets/images/support.png'
import chef from '../assets/images/chef.png'
import order from '../assets/images/order.png'
import '../styles/best-of-us.css'

class BestOfUs extends Component{
    render(){
        return(
            <div className='container cs-best-of-us-section'>
                <div className='cs-best-div'>
                    <img src={support} alt="Support" />
                    <div>
                        <p>24x7</p>
                        <p>Customer support</p>
                    </div>
                </div>
                <div className='cs-best-div'>
                    <img src={chef} alt="Support" />
                    <div>
                        <p>Chef</p>
                        <p>Experienced chefs</p>
                    </div>
                </div>
                <div className='cs-best-div'>
                    <img src={order} alt="Support" />
                    <div>
                        <p>Order</p>
                        <p>Easy way of ordering</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default BestOfUs;