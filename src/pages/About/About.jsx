import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import gradient from './gradient.png'
import mission from './svg/space-shuttle-svgrepo-com.svg'
import vision from './svg/strategy-svgrepo-com.svg'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { values } from '../../data'

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    AOS.refresh()
  }, [])

  return (
    <div className='container'>
      <Header />
        <main className='about'>
          <img src={gradient} alt="gradient" className='gradient-image'/>
          <div className="sum" data-aos="zoom-in" data-aos-delay="200">
            <h1>About EMERELD</h1>
            <span>
            Leading marketing and technology company providing innovative solutions for businesses worldwide.
            </span>
            <p>
            Founded with a vision to revolutionize the digital landscape, EMERELD has been at the forefront of software innovation. Our team of expert developers and designers work tirelessly to deliver solutions that exceed expectations.
            </p>
          </div>
          <div className="mv" data-aos="fade-up">
            <div className="mission">
              <div className='mission-logo'>
                <img src={mission} alt="a" width={40} height={40}/>
              </div>
              <h2>Our Mission</h2>
              <p>
              We empower brands by delivering exceptional, end-to-end creative and technical services — from captivating web design and social media strategies to high-impact photography, professional print solutions, and seamless travel bookings. Through creativity, technology, and client-centric partnerships, we turn ideas into measurable success.
              </p>
            </div>
            <div className="vision">
              <div className='vision-logo'>
                <img src={vision} alt="a" width={40} height={40}/>
              </div>
              <h2>Our Vision</h2>
              <p>
              To become the leading integrated creative solutions provider, bridging digital innovation with physical presence to help businesses of all sizes thrive in an evolving marketplace.              </p>
            </div>
          </div>
          <div className="values">
            <h1>Our Values</h1>
            <p>
            Our values drive us towards excellence and innovation in everything we do.
            </p>
            <div className="value-cards" data-aos="fade-up">
              {
                values.map((box) => (
                  <div className="box">
                    <div>
                    <img src={box.iconLink} alt="icon" width={40} height={40}/>
                    </div>
                    <h3>{box.name}</h3>
                    <p>{box.description}</p>
                  </div>
                ))
              }
            </div>
            <div className="get-started" data-aos="fade-up">
              <h3>Get Started</h3>
              <p>
              Discover how EMERELD can help you achieve success with advanced software solutions.
              </p>
              <a href="/contact">
              Contact Us
              </a>
            </div>
          </div>
        </main>
      <Footer />
    </div>
  )
}

export default About
