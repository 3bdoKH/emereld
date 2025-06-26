import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import facebook from '../../../images/socialmedia/facebook.jpeg'
import instagram from '../../../images/socialmedia/instagram.jpeg'
import tiktok from '../../../images/socialmedia/tiktok.jpeg'
import snapchat from '../../../images/socialmedia/snapchat.jpeg'
import './social.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const socialServices = [
  {
    name: 'Facebook',
    detail: 'Brand storytelling and community building',
    images: [facebook]
  },
  {
    name: 'Instagram',
    detail: 'Visual content strategy and influencer collaborations',
    images: [instagram]
  },
  {
    name: 'TikTok',
    detail: 'Trend-driven short videos for viral potential',
    images: [tiktok]
  },
  {
    name: 'Snapchat',
    detail: 'Ephemeral content for authentic engagement',
    images: [snapchat]
  }
]

const Social = () => {
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
          <h1>Social Media Management</h1>
          <p>Strategic content creation across major platforms.</p>
        </section>
        <section className="service-details">
          <h2>Our Social Media Services</h2>
          <div className="service-list">
            {socialServices.map((srv, idx) => (
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
          <h3>Grow your brand on social media!</h3>
          <a href="/contact" className="cta-btn">Start Now</a>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Social
