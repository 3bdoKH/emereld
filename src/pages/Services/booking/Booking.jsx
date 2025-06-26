import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import domesticFlights from '../../../images/booking/Domestic-Flights.jpeg'
import internationalFlights from '../../../images/booking/International-Flights.jpeg'
import './booking.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const bookingServices = [
  {
    name: 'International Flights',
    detail: 'Worldwide destinations with premium airline options',
    images: [internationalFlights]
  },
  {
    name: 'Domestic Flights',
    detail: 'Local travel with best-price guarantees',
    images: [domesticFlights]
  }
]

const Booking = () => {
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
          <h1>Travel Booking</h1>
          <p>Hassle-free flight arrangements with competitive pricing.</p>
        </section>
        <section className="service-details">
          <h2>Our Booking Services</h2>
          <div className="service-list">
            {bookingServices.map((srv, idx) => (
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
          <h3>Ready to book your next trip?</h3>
          <a href="/contact" className="cta-btn">Book Now</a>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Booking
