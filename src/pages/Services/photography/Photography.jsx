import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import food1 from '../../../images/photography/food.jpeg'
import food2 from '../../../images/photography/food-2.jpeg'
import food3 from '../../../images/photography/food-3.jpeg'
import food4 from '../../../images/photography/food-4.jpeg'
import food5 from '../../../images/photography/food-5.jpeg'
import food6 from '../../../images/photography/food-6.JPG'
import product1 from '../../../images/photography/product.jpeg'
import product2 from '../../../images/photography/product-2.jpeg'
import product3 from '../../../images/photography/product-3.jpeg'
import session1 from '../../../images/photography/IMG_8398.jpg'
import session2 from '../../../images/photography/IMG_2862_jpg.jpg'
import { useEffect } from 'react'
import './photography.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const reelsEmbeds = [
  { html: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen;autoplay" allowfullscreen height="100%" src="https://streamable.com/e/3nrvck?autoplay=1&muted=1&nocontrols=1" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` },
  { html: `<div style="position:relative; width:100%; height:0px; padding-bottom:177.778%"><iframe allow="fullscreen;autoplay" allowfullscreen height="100%" src="https://streamable.com/e/l1w5oc?autoplay=1&muted=1&nocontrols=1" width="100%" style="border:none; width:100%; height:100%; position:absolute; left:0px; top:0px; overflow:hidden;"></iframe></div>` }
]

const photoServices = [
  {
    name: 'Reels & Videos',
    detail: 'Engaging short-form content for social media',
    embeds: reelsEmbeds
  },
  {
    name: 'Product Photography',
    detail: 'Studio-quality images to showcase your merchandise',
    images: [product1, product2, product3]
  },
  {
    name: 'Photo Sessions',
    detail: 'Professional portraits for teams or personal branding',
    images: [session1, session2]
  },
  {
    name: 'Food Photography',
    detail: 'Mouth-watering images for menus, ads, or social media',
    images: [food1, food2, food3, food4, food5, food6]
  }
]

const Photography = () => {
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
          <h1>Professional Photography</h1>
          <p>High-quality visual content to elevate your brand's image.</p>
        </section>
        <section className="service-details">
          <h2>Our Photography Services</h2>
          <div className="service-list">
            {photoServices.map((srv, idx) => (
              <div className="service-block" key={srv.name}>
                <h3>{srv.name}</h3>
                <p>{srv.detail}</p>
                {srv.embeds && (
                  <div className="service-videos">
                    {srv.embeds.map((embed, i) => (
                      <div key={i} dangerouslySetInnerHTML={{ __html: embed.html }} />
                    ))}
                  </div>
                )}
                {srv.images && (
                  <div className="service-images">
                    {srv.images.map((img, i) => (
                      <img src={img} alt={srv.name + ' ' + (i+1)} key={i} className="service-img" />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="service-cta">
          <h3>Want stunning visuals for your brand?</h3>
          <a href="/contact" className="cta-btn">Book a Session</a>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Photography
