import React from 'react'
import './Hero.css'
import gradient from './gradient.png'
import Spline from '@splinetool/react-spline'
const HeroSectionOne = () => {
    return (
    <section>
        <img className='image-gradient'
        src={gradient} alt="gradient" width={100} height={100} />
        <div className="layer-blure"></div>
        <div className='container'>
            <main data-aos="fade-up">
                <div className="content">
                    <div className="tag-box" data-aos="zoom-in" data-aos-delay="200">
                        <div className="tag">
                            ITRODUCING 
                        </div>
                    </div>
                        <h1>ENAIL FOR<br />DEVELOPERS</h1>
                        <p className='description'>
                        At EMRELED,We provide Web design, social media, photography, printing, and flight booking.
                        </p>
                        <div className="buttons" data-aos="fade-up" data-aos-delay="400">
                        <a href='/contact' 
                        className="cssbuttons-io-button">
                            Get started
                            <div className="icon">
                                <svg
                                height="24"
                                width="24"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    fill="currentColor"
                                ></path>
                                </svg>
                            </div>
                        </a>
                        <a href='/about' className="button">
                        See All
                        <span className="button-span"> ─ Now</span>
                        </a>
                        </div>
                </div>
            </main>
            <Spline className='robot-3d' scene="https://prod.spline.design/JA4ZMUOUkTYTMgJ2/scene.splinecode" />
            
        </div>
    </section>
    )
}

export default HeroSectionOne
