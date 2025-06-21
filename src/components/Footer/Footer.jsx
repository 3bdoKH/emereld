import React from 'react'
import logo from '../../default-monochrome-white.svg'
import {socialLinks, navItems, services} from '../../data/index'
import { ChevronRight, MapPin, Phone , Mail } from 'lucide-react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer  data-aos="fade-up">
        <div className="up">
            <div className="about">
                <img src={logo} alt="Logo" width={100} height={40}/>
                <p className="description">
                Leading marketing and technology company providing innovative solutions for businesses worldwide.
                </p>
                <div className="links">
                    {
                        socialLinks.map((link) => (
                            <Link to={link.link}>
                                {link.icon}
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="quick-links">
                <h3>Quick Links</h3>
                {
                    navItems.map((link) => (
                        <Link to={link.link}>
                            <ChevronRight color='#374FFF'/>
                            <span>
                            {link.name}
                            </span>
                        </Link>
                    ))
                }
            </div>
            <div className="services-footer">
                <h3>Services</h3>
                {
                    services.map((service) => (
                        <a href="/services">
                            <ChevronRight color='#374FFF'/>
                            <span>
                                {
                                    service.category
                                }
                            </span>
                        </a>
                    ))
                }
            </div>
        </div>
        <div className="down">
            <div className="contact-info">
                <h3>Contact</h3>
                <p>
                    <MapPin color='#374FFF'/>
                    <span>79 Taiba Towers - Nasr City, 11511</span>
                </p>
                <p>
                    <Phone color='#374FFF'/>
                    <span>+20 109 501 6685</span>
                </p>
                <p>
                    <Mail color='#374FFF'/>
                    <span>emereldemarkting@gmail.com</span>
                </p>
            </div>
            <div className="copyright">
                <p>@ 2025 EMERELD. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
