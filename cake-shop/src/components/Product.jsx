import React, { Component } from 'react';
import '../styles/product.css';
import searcharrow from '../assets/images/search_arrow.png'


class Product extends Component{
    render(){
        return(
            <div className='container cs-product-section'>
                <div className='cs-search-section'>
                    <input type="text" className='cs-search-input' name='search-input' id='search-input' placeholder='Search your favorite.......'/>
                    <button className='cs-search-function'>
                        <img src={searcharrow} alt="Search" />
                    </button>
                </div>
            </div>
        )
    }
}


export default Product;