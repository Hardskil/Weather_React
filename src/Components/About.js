import React from 'react'
import "../Style/About.css"
import banner from '../Img/Banner.png'
function About({desc,title}) {
    return (
        <div className='about-container'>
            <div className='banner-wrapper'>
                <img  src={banner}/>
            </div>
        <div className="About">
            <div className="left-box" ></div>
            <div className="right-box"></div>
            <div className="content">
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
        </div>
    )
}

export default About
