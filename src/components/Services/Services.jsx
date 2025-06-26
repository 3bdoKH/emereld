import React from 'react'
import { services } from '../../data'
import ServiceCard from '../Card/ServiceCard'
import './Services.css'
import { useNavigate } from 'react-router-dom'

const serviceRoutes = {
    'Web Design': '/services/web',
    'Social Media Management': '/services/social',
    'Professional Photography': '/services/photography',
    'Printing Services': '/services/printing',
    'Travel Booking': '/services/booking',
}

const Services = () => {
    const navigate = useNavigate();
    const handleCardClick = (service) => {
        const route = serviceRoutes[service.category];
        if (route) navigate(route);
    }

    return (
    <div className="services" >
        <h1 data-aos="fade-up">Our Services</h1>
        <p data-aos="fade-up">Comprehensive Technology Solutions</p>
        <div className="cards">
        {
            services.map((service, index) => (
                <ServiceCard 
                    key={index}
                    icon={service.icon} 
                    title={service.category} 
                    description={service.description}
                    service={service}
                    onCardClick={handleCardClick}
                />
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
