import React, { Component } from 'react';
import axios from 'axios';

import '../styles/product.css';
import searcharrow from '../assets/images/search_arrow.png'
import sample_cake_image from '../assets/images/sample_cake_image.jpeg'


class Product extends Component{

    constructor(props){
        super(props);
        this.state = {
            cakes : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost/cakeshop-API/getdata.php')
        .then(reponse => {
            this.setState({
                cakes: reponse.data
            })
        })
        .catch(error => {
            console.log('Data fetching faild,', error);
        })
    }

    render(){
        const cakes = this.state.cakes;
        return(
            <div className='cs-product-section'>
                <div className='container  cs-search-section'>
                    <input type="text" className='cs-search-input' name='search-input' id='search-input' placeholder='Search your favorite.......'/>
                    <button className='cs-search-function'>
                        <img src={searcharrow} alt="Search" />
                    </button>
                </div>

                <div className='cs-product-and-list-section'>
                    <div className='cs-product-filter'>
                        <p className='cs-filter-title'>Filter</p>
                        <div className='flavour-filter filter'>
                            <p className='title'>Flavours</p>
                            <div className='checkbox-input-main-div'>
                                <div className='checkbox-input-div'>
                                    <input type="checkbox" data-value="Chocolate" id='Chocolate'/>
                                    <label htmlFor="Chocolate" >Chocolate</label> 
                                </div>                           
                                <div className='checkbox-input-div'>
                                    <input type="checkbox" data-value="Vanilla" id='Vanilla'/>
                                    <label htmlFor='Vanilla'>Vanilla</label>
                                </div>   
                                <div className='checkbox-input-div'>
                                    <input type="checkbox" data-value="Strawberry" id='Strawberry'/>                         
                                    <label htmlFor='Strawberry'>Strawberry</label>
                                </div>                            
                                <div className='checkbox-input-div'>
                                    <input type="checkbox" data-value="Almond" id='Almond'/>
                                    <label htmlFor='Almond'>Almond</label>
                                </div>
                            </div>                            
                        </div>
                        <div className='category-filter filter'>
                            <p className='title'>Category</p>
                            <div className='checkbox-input-main-div'>
                                <div className='checkbox-input-div'>
                                    <input type="checkbox" data-value="Classic Cakes" id='Classic Cakes'/>
                                    <label htmlFor='Classic Cakes'>Classic Cakes</label>
                                </div>                            
                                <div className='checkbox-input-div'>
                                    <input type="checkbox" data-value="Fruit Cakes" id='Fruit Cakes'/>
                                    <label htmlFor='Fruit Cakes'>Fruit Cakes</label>
                                </div>
                                <div className='checkbox-input-div'>
                                    <input type="checkbox" data-value="Nutty Cakes" id='Nutty Cakes'/>                            
                                    <label htmlFor='Nutty Cakes'>Nutty Cakes</label>
                                </div>
                                <div className='checkbox-input-div'>
                                    <input type="checkbox" data-value="Cheesecakes" id='Cheesecakes'/>                            
                                    <label htmlFor='Cheesecakes'>Cheesecakes</label>
                                </div> 
                            </div>                                           
                        </div>
                    </div>
                    <div className='cs-products-list'>
                        {
                            cakes.map((cake, index) => (
                                <div className='product-card' key={index}>
                                    <div className='product-card-image'>
                                        <img src={`http://localhost/cakeshop-API/uploads/${cake.image}`} alt="Product" />
                                    </div>
                                    <div className='product-card-details'>
                                        <p className='product-name'>{cake.name}</p>
                                        <p className='product-amount'>Rs. {cake.price}</p>
                                        <p className='product-description'>{cake.description}</p>
                                    </div>
                                </div>
                            ))
                        }                        
                    </div>
                </div>
            </div>
        )
    }
}


export default Product;