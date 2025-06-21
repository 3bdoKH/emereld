import React from 'react'
import { services } from '../../data'
import ServiceCard from '../Card/ServiceCard'
import './Services.css'
const Services = () => {
    return (
    <div className="services" >
        <h1 data-aos="fade-up">Our Services</h1>
        <p data-aos="fade-up">Comprehensive Technology Solutions</p>
        <div className="cards">
        {
            services.map((service) => (
                <ServiceCard icon={service.icon} title={service.category} description={service.description} />
            ))
        }
        </div>
        <a href='/services' className="button" data-aos="fade-up">
        See All
        <span className="button-span"> ─ Now</span>
        </a>
    </div>
    )
}

export default Services
