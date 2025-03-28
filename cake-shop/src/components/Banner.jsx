import React, { Component } from 'react';
import '../styles/banner.css';
import banner_image from '../assets/images/banner_image.png'

class Banner extends Component{
    render(){
        return(
            <div className='container cs-baner'>
                <div className='row'>
                    <div className='col-md-6 cs-banner-left-div'>
                        <p className='cs-bnr-txt1'>Delicious Cakes for Every Celebration</p>
                        <p className='cs-bnr-txt2'>Bite Into happiness!</p>
                        <button>Explore Our Creations</button>
                    </div>
                    <div className='col-md-6 cs-banner-right-div'>
                        <img className='img-fluid' src={banner_image} alt='Banner Image' />
                    </div>
                </div>
            </div>
        )
    }
}


export default Banner;
