import React from 'react'
import './ServiceCard.css'
const ServiceCard = ({icon, title, description, service, onCardClick}) => {
    const handleCardClick = (e) => {
        if (e.target.tagName === 'A') {
            return;
        }
        onCardClick(service);
    };

    return (
        <div className='card' data-aos="fade-up" onClick={handleCardClick} style={{cursor: 'pointer'}}>
            <div>
                <span>{icon}</span>
                <h3>{title}</h3>
                <div></div>
            </div>
            <p>{description}</p>
            <button  onClick={handleCardClick}>
                Learn More
            </button>
        </div>
    )
}

export default ServiceCard
