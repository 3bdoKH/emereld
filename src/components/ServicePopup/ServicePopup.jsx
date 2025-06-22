import React from 'react'
import { X } from 'lucide-react'
import './ServicePopup.css'

// Import all images
// Web Design images
import informational1 from '../../images/web/informational-1.jpeg'
import informational2 from '../../images/web/informational-2.jpeg'
import commerce from '../../images/web/commerce.jpeg'
import seo from '../../images/web/SEO.jpeg'
import seo1 from '../../images/web/SEO-1.jpeg'
import googleAds from '../../images/web/google-ads.jpeg'

// Social Media images
import facebook from '../../images/socialmedia/facebook.jpeg'
import instagram from '../../images/socialmedia/instagram.jpeg'
import tiktok from '../../images/socialmedia/tiktok.jpeg'
import snapchat from '../../images/socialmedia/snapchat.jpeg'

// Photography images
import photo1 from '../../images/photography/5F95CF60-C740-41C6-A0AC-BFE9AD838065.jpg'
import photo2 from '../../images/photography/B1E4431E-6B15-4E45-A99F-414C6E337944.JPEG'
import photo3 from '../../images/photography/B5642D48-76E2-4693-8D13-A4AF96A52129.JPEG'
import photo4 from '../../images/photography/B9DC6AFE-A41F-406F-AFAC-D4A4D53FEA35.JPEG'
import photo5 from '../../images/photography/b9fffb2b7a07c1c63f26f44bc58196ca.JPG'
import photo6 from '../../images/photography/IMG_2862_jpg.jpg'
import photo7 from '../../images/photography/IMG_8398.jpg'

// Printing images
import businessCards from '../../images/printing/business-cards.jpeg'
import flyersBrochures from '../../images/printing/Flyers-Brochures.jpeg'
import restaurantMenus from '../../images/printing/Restaurant-Menus.jpeg'
import invoiceBooks from '../../images/printing/Invoice-Books.jpeg'
import prescriptionPads from '../../images/printing/Prescription-Pads.jpeg'
import advertisingSignage from '../../images/printing/Advertising-Signage.jpeg'

// Booking images
import domesticFlights from '../../images/booking/Domestic-Flights.jpeg'
import internationalFlights from '../../images/booking/International-Flights.jpeg'

// Service to image mapping
const serviceImages = {
  // Web Design
  "Informational Websites": [informational1, informational2],
  "E-commerce Stores": [commerce],
  "SEO": [seo, seo1],
  "Google Ads": [googleAds],
  
  // Social Media
  "Facebook": [facebook],
  "Instagram": [instagram],
  "TikTok": [tiktok],
  "Snapchat": [snapchat],
  
  // Photography
  "Reels & Videos": [photo1, photo2],
  "Product Photography": [photo3, photo4],
  "Photo Sessions": [photo5, photo6, photo7],
  
  // Printing
  "Business Cards": [businessCards],
  "Flyers & Brochures": [flyersBrochures],
  "Restaurant Menus": [restaurantMenus],
  "Custom Invoice Books": [invoiceBooks],
  "Prescription Pads": [prescriptionPads],
  "Advertising Signage": [advertisingSignage],
  
  // Travel Booking
  "International Flights": [internationalFlights],
  "Domestic Flights": [domesticFlights]
}

const ServicePopup = ({ service, isOpen, onClose }) => {
  if (!isOpen || !service) return null

  return (
    <div className="service-popup-overlay" onClick={onClose}>
      <div className="service-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="popup-content">
          <div className="popup-header">
            <div className="service-icon">
              {service.icon}
            </div>
            <h2>{service.category}</h2>
            <p className="service-description">{service.description}</p>
          </div>

          <div className="popup-body">
            <div className="service-details">
              <h3>Our Services Include:</h3>
              <div className="services-list">
                {service.services.map((subService, index) => {
                  const images = serviceImages[subService.name] || []
                  return (
                    <div key={index} className="service-item">
                      <div className="service-item-content">
                        <div className="service-text">
                          <h4>{subService.name}</h4>
                          <p>{subService.detail}</p>
                        </div>
                        {images.length > 0 && (
                          <div className="service-images">
                            {images.map((image, imgIndex) => (
                              <img 
                                key={imgIndex} 
                                src={image} 
                                alt={subService.name}
                                className="service-image"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="popup-footer">
            <button className="contact-button" onClick={() => window.location.href = '/contact'}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePopup 