import React from 'react'
import "./Hero.css"
import hero_image from "./../assets/hero_image.png"
import hero_back_image from "./../assets/hero_image_back.png"
import Heart from ".././assets/heart.png"
 import calories from "./../assets/calories.png"
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
                {/* hero header text */}
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
                    {/* Hero header paragraph */}
                    <div className='header-para'>
                        <span>
                            In Here we will help you to shape and build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
<div className="fighures">
    <div>
        <span>+ 140</span>
        <span>EXPERT COACHES</span>
    </div>
    <div>
        <span>+ 978</span>
        <span>MEMBERS JOINED</span>
    </div>
    <div>
        <span>+ 50</span>
        <span>FITNESS PROGRAMS</span>
    </div>
</div>
{/* hero buttons */}
<div className='hero-buttons'>
<button className='btn'>Get Started</button>
<button className='btn'>Learn More</button>
</div>
            </div>

            <div className="right-side">
               <button className='btn'>Join Now</button>
               <div className='heart-rate'>
                <img src={Heart} alt="" /> 
                <span>Heat Rate</span>
                <span>116 BPM</span></div>
                {/* hero images */}
                <img src={hero_image} alt="" className='hero_img' />
                <img src={hero_back_image} alt="" className='hero_img_back' />
                <div className="calories">
                    <img src={calories} alt="" />
                    <div>
                    <span>Calories burned</span><span>220 kcal</span> 
                    </div>
                   
                </div>
            </div>

        </div>
    )
}

export default Hero
