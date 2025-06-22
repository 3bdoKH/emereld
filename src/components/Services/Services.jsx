import React, { useState } from 'react'
import { services } from '../../data'
import ServiceCard from '../Card/ServiceCard'
import ServicePopup from '../ServicePopup/ServicePopup'
import './Services.css'

const Services = () => {
    const [selectedService, setSelectedService] = useState(null)
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const handleCardClick = (service) => {
        setSelectedService(service)
        setIsPopupOpen(true)
    }

    const closePopup = () => {
        setIsPopupOpen(false)
        setSelectedService(null)
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

        <ServicePopup 
            service={selectedService}
            isOpen={isPopupOpen}
            onClose={closePopup}
        />
    </div>
    )
}

export default Services
