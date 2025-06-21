import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Services.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { services } from '../../data'
import gradient from './gradient.png'
import { testimonials } from '../../data'
import img1 from '../../images/5F95CF60-C740-41C6-A0AC-BFE9AD838065.jpg';
import img2 from '../../images/B1E4431E-6B15-4E45-A99F-414C6E337944.JPEG';
import img3 from '../../images/B9DC6AFE-A41F-406F-AFAC-D4A4D53FEA35.JPEG';
import img4 from '../../images/b9fffb2b7a07c1c63f26f44bc58196ca.JPG';
import img5 from '../../images/IMG_2862_jpg.jpg';
import img6 from '../../images/B5642D48-76E2-4693-8D13-A4AF96A52129.JPEG';
import img7 from '../../images/IMG_8398.jpg';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    AOS.refresh()
  }, [])

  const handleRequestInfo = (category) => {
    window.location.href = `/contact?service=${encodeURIComponent(category)}`;
  };

  const allImages = [img1, img2, img3, img4, img5, img6, img7];
  const [selectedImage, setSelectedImage] = useState(allImages[0]);

  return (
    <div className="container">
      <Header />
      <main className="services">
        <img src={gradient} alt="gradient" className="gradient-image" />
        <div className="services-summary" data-aos="zoom-in" data-aos-delay="200">
          <h1>Our Services</h1>
          <span>
            Discover the wide range of creative and technical services EMERELD offers to help your business grow.
          </span>
        </div>
        <div className="services-divider" />
        <div className="services-list">
          {services.map((cat, idx) => (
            <div className="service-category" key={cat.category} data-aos="fade-up" data-aos-delay={100 * idx}>
              <div className="service-icon service-icon-animated">{cat.icon}</div>
              <h2>{cat.category}</h2>
              <p className="service-description">{cat.description}</p>
              <ul className="service-items">
                {cat.services.map((srv) => (
                  <li key={srv.name} className="service-item">
                    <strong>{srv.name}:</strong> {srv.detail}
                  </li>
                ))}
              </ul>
              <button className="request-info-btn" onClick={() => handleRequestInfo(cat.category)}>
                Request Info
              </button>
            </div>
          ))}
        </div>
        {/* Professional Photography Section */}
        <section className="photography-section" data-aos="fade-up" data-aos-delay="200">
          <h2 className="photography-title">Professional Photography</h2>
          <p className="photography-description">A showcase of our best work, capturing moments with creativity and precision.</p>
          <div className="photography-gallery-main">
            <img src={selectedImage} alt="Selected Emereld Photography" className="main-photo" />
          </div>
          <div className="photography-gallery-thumbnails">
            {allImages.map((src, idx) => (
              <div className={`photo-thumb${selectedImage === src ? ' selected' : ''}`} key={idx} onClick={() => setSelectedImage(src)}>
                <img src={src} alt={`Emereld Photography Thumbnail ${idx+1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
        {/* Featured Videos Section */}
        <section className="videos-section" data-aos="fade-up" data-aos-delay="200">
          <h2 className="videos-title">Featured Videos</h2>
          <p className="videos-description">Explore some of our video work, showcasing our creative and technical expertise.</p>
          <div className="videos-gallery">
            <div className="video-item">
              <iframe src="https://streamable.com/e/bf35bp" allowFullScreen title="Featured Video 1" frameBorder="0"></iframe>
            </div>
            <div className="video-item">
              <iframe src="https://streamable.com/e/3htihn" allowFullScreen title="Featured Video 2" frameBorder="0"></iframe>
            </div>
          </div>
        </section>
        <div className="services-cta" data-aos="zoom-in-up" data-aos-delay="200">
          <h3>Ready to elevate your business?</h3>
          <p>Contact us today for a free consultation and discover how EMERELD can help you achieve your goals.</p>
          <a href="/contact" className="cta-btn">Get in Touch</a>
        </div>
        <div className="testimonials-section" data-aos="fade-up" data-aos-delay="300">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-list">
            {testimonials.map((t, i) => (
              <div className="testimonial" key={i}>
                <p className="testimonial-text">“{t.text}”</p>
                <div className="testimonial-author">- {t.name}, <span>{t.company}</span></div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Services
