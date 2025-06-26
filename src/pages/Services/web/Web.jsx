import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import informational1 from '../../../images/web/informational-1.jpeg'
import informational2 from '../../../images/web/informational-2.jpeg'
import commerce from '../../../images/web/commerce.jpeg'
import seo from '../../../images/web/SEO.jpeg'
import seo1 from '../../../images/web/SEO-1.jpeg'
import googleAds from '../../../images/web/google-ads.jpeg'
import './web.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const webServices = [
  {
    name: 'Informational Websites',
    detail: 'Custom-built sites to showcase your brand and services',
    images: [informational1, informational2]
  },
  {
    name: 'E-commerce Stores',
    detail: 'Secure online shops with payment integration and inventory management',
    images: [commerce]
  },
  {
    name: 'SEO',
    detail: 'Search engine optimization to improve visibility and organic traffic',
    images: [seo, seo1]
  },
  {
    name: 'Google Ads',
    detail: 'Targeted advertising campaigns for maximum ROI',
    images: [googleAds]
  }
]

const Web = () => {
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
          <h1>Web Design</h1>
          <p>Professional online presence development with responsive designs.</p>
        </section>
        <section className="service-details">
          <h2>Our Web Services</h2>
          <div className="service-list">
            {webServices.map((srv, idx) => (
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
          <h3>Ready to build your website?</h3>
          <a href="/contact" className="cta-btn">Get Started</a>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Web
