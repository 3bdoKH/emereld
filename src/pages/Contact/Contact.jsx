import React from 'react'
import './contact.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useEffect } from 'react'
import { ContactForm } from '../../components/contactform/ContactForm'
import { socialLinks } from '../../data'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import gradient from './gradient.png'
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    AOS.refresh()
  }, [])
  return (
    <div>
      <Header />
      <div className="con">
        <img src={gradient} alt="" width={500} height={500}/>
        <div className="contact-us" data-aos="fade-right">
          <h1>Contact Us</h1>
          <p>Let's Build Something Amazing Together</p>
          <div className="social-Links">
            {
              socialLinks.map((link) => (
                <Link to={link.link}>
                  {link.icon}
                </Link>
              ))
            }
          </div>
          <div className="info">
            <div>
            <MapPin color="#1f57ff" />
            <span>79 Taiba Towers - Nasr City, 11511</span>
            </div>
            <div>
            <Phone color="#44c200" />
              <span>
            +20 109 501 6685
              </span>
            </div>
            <div>
            <Mail color="#ff1a1a" />
            <span>emereldemarkting@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="contact-info" data-aos="fade-left">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
