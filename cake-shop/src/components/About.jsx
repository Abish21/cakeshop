import React, { Component } from 'react';
import '../styles/about.css';
import about from '../assets/images/about_image.png';


class About extends Component{
    render(){
        return(
            <div className='container cs-about-section'>
                <div className='row'>
                    <div className='col-md-6 cs-about-left-div'>
                        <img src={about} alt="About Image" />
                    </div>
                    <div className='col-md-6 cs-about-right-div'>
                        <p className='cs-about-title'>Our Story</p>
                        <p className='cs-about-cnt'>At Our shop, we believe that every celebration deserves a delicious centerpiece and what better than a freshly baked, beautifully decorated cake?</p>
                        <p className='cs-about-cnt'>Our journey began with a simple passion for baking and spreading joy through sweet treats. What started as a small home kitchen has now become a go-to destination for cake lovers who crave quality, creativity, and a personal touch. We specialize in handcrafted cakes, cupcakes, and custom desserts that are made with love, premium ingredients, and a whole lot of heart. From birthdays and weddings to just-because moments, we’re here to make every occasion extra special.</p>
                        <p className='cs-about-cnt'>So whether you're looking for a classic chocolate cake or a custom-designed masterpiece, we’ve got you covered one slice at a time.</p>
                    </div>
                </div>
            </div>
        )
    }
}


export default About;