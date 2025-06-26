import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import businessCards from '../../../images/printing/business-cards.jpeg'
import flyersBrochures from '../../../images/printing/Flyers-Brochures.jpeg'
import restaurantMenus from '../../../images/printing/Restaurant-Menus.jpeg'
import invoiceBooks from '../../../images/printing/Invoice-Books.jpeg'
import prescriptionPads from '../../../images/printing/Prescription-Pads.jpeg'
import advertisingSignage from '../../../images/printing/Advertising-Signage.jpeg'
import './printing.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const printingServices = [
  {
    name: 'Business Cards',
    detail: 'Premium cardstock with various finish options',
    images: [businessCards]
  },
  {
    name: 'Flyers & Brochures',
    detail: 'Eye-catching designs for promotions and events',
    images: [flyersBrochures]
  },
  {
    name: 'Restaurant Menus',
    detail: 'Food photography integrated with menu design',
    images: [restaurantMenus]
  },
  {
    name: 'Custom Invoice Books',
    detail: 'Branded financial documents with sequential numbering',
    images: [invoiceBooks]
  },
  {
    name: 'Prescription Pads',
    detail: 'Professional medical forms with security features',
    images: [prescriptionPads]
  },
  {
    name: 'Advertising Signage',
    detail: 'Durable indoor/outdoor signs for maximum visibility',
    images: [advertisingSignage]
  }
]

const Printing = () => {
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
      <main className="service-main">
        <section className="service-hero">
          <h1>Printing Services</h1>
          <p>Premium quality print materials for effective offline marketing.</p>
        </section>
        <section className="service-details">
          <h2>Our Printing Services</h2>
          <div className="service-list">
            {printingServices.map((srv, idx) => (
              <div className="service-block" key={srv.name}>
                <h3>{srv.name}</h3>
                <p>{srv.detail}</p>
                <div className="service-images">
                  {srv.images.map((img, i) => (
                    <img src={img} alt={srv.name + ' ' + (i+1)} key={i} className="service-img" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="service-cta">
          <h3>Need high-quality prints for your business?</h3>
          <a href="/contact" className="cta-btn">Request a Quote</a>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Printing
