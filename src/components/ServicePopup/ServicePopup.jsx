import React, { useState } from 'react'
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
import food1 from '../../images/photography/food.jpeg'
import food2 from '../../images/photography/food-2.jpeg'
import food3 from '../../images/photography/food-3.jpeg'
import food4 from '../../images/photography/food-4.jpeg'
import food5 from '../../images/photography/food-5.jpeg'
import food6 from '../../images/photography/food-6.JPG'
import product1 from '../../images/photography/product.jpeg'
import product2 from '../../images/photography/product-2.jpeg'
import product3 from '../../images/photography/product-3.jpeg'
import session1 from '../../images/photography/IMG_8398.jpg'
import session2 from '../../images/photography/IMG_2862_jpg.jpg'

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
  "Reels & Videos": [
    { type: 'embed', html: `<div style=\"position:relative; width:100%; height:0px; padding-bottom:177.778%\"><iframe allow=\"fullscreen;autoplay\" allowfullscreen height=\"100%\" src=\"https://streamable.com/e/3nrvck?autoplay=1&muted=1&nocontrols=1\" width=\"100%\" style=\"border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;\"></iframe></div>` },
    { type: 'embed', html: `<div style=\"position:relative; width:100%; height:0px; padding-bottom:177.778%\"><iframe allow=\"fullscreen;autoplay\" allowfullscreen height=\"100%\" src=\"https://streamable.com/e/l1w5oc?autoplay=1&muted=1&nocontrols=1\" width=\"100%\" style=\"border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;\"></iframe></div>` }
  ],
  "Product Photography": [product1, product2, product3],
  "Photo Sessions": [session1, session2],
  "Food Photography": [food1, food2,food3, food4, food5, food6],
  
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
  const [fullscreenImage, setFullscreenImage] = useState(null)
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
                        {subService.name === 'Reels & Videos' && images.length > 0 ? (
                          <div className="service-videos">
                            {images.map((media, vidIndex) => (
                              media.type === 'embed' ? (
                                <div key={vidIndex} dangerouslySetInnerHTML={{ __html: media.html }} />
                              ) : media.type === 'video' ? (
                                <iframe
                                  key={vidIndex}
                                  src={media.url}
                                  title={`Reel Video ${vidIndex + 1}`}
                                  width="320"
                                  height="180"
                                  frameBorder="0"
                                  allow="autoplay; fullscreen"
                                  allowFullScreen
                                  className="service-video"
                                  style={{ margin: '8px' }}
                                />
                              ) : null
                            ))}
                          </div>
                        ) : images.length > 0 ? (
                          <div className="service-images">
                            {images.map((image, imgIndex) => (
                              <img 
                                key={imgIndex} 
                                src={image} 
                                alt={subService.name}
                                className="service-image"
                                onClick={() => setFullscreenImage(image)}
                                style={{ cursor: 'pointer' }}
                              />
                            ))}
                          </div>
                        ) : null}
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
        {fullscreenImage && (
          <div className="fullscreen-image-overlay" onClick={() => setFullscreenImage(null)}>
            <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ServicePopup 