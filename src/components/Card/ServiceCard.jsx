import React from 'react'
import './ServiceCard.css'
const ServiceCard = ({icon, title, description}) => {
    return (
        <div className='card' data-aos="fade-up">
            <div>
                <span>{icon}</span>
                <h3>{title}</h3>
                <div></div>
            </div>
            <p>{description}</p>
            <a href="/services">
                Learn More
            </a>
        </div>
    )
}

export default ServiceCard
