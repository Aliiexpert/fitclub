import React from 'react'
import "./Hero.css"
import Header from './Header/Header'
const Hero = () => {
    return (

        <div className='Hero'>
            <div className="left-side">
                <Header />
                <div className='ad'>

                    <div></div>
                    <span> The Best Fitness Club In The Town</span>
                </div>
                <div className='header-text'>
                <div>
                    <span className='stroke-text'>Shape
                    </span>
                    <span> Your</span>
                </div>
                <div>
                    <span>
                        Ideal</span> <span>Body</span>
                </div>
                <div className='header-para'>
                <span>
                    In Here we will help you to shape and build your ideal body and live up your life to fullest
                </span>
            </div>
            </div>
            
            </div>
            
            <div className="right-side">
                Right side
            </div>
        </div>
    )
}

export default Hero
