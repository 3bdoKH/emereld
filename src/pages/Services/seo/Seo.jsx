import React from 'react'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import seo1 from '../../../images/seo/seo-1.png'
import seo2 from '../../../images/seo/seo-2.png'
import seo3 from '../../../images/seo/seo-3.png'
import seo4 from '../../../images/seo/seo-4.png'
import seo5 from '../../../images/seo/seo-5.png'
import seo6 from '../../../images/seo/seo-6.png'
import seo7 from '../../../images/seo/seo-7.png'
import './seo.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const seoServices = [
    {
        name: 'On-Page SEO',
        detail: 'Optimize content, meta tags, and site structure for better rankings',
        images: [seo3, seo4, seo5],
        benefits: [
            'Improved search engine visibility',
            'Higher quality content that ranks',
            'Better user experience and engagement',
            'Optimized meta descriptions and titles'
        ]
    },
    {
        name: 'Keyword Research',
        detail: 'Identify high-value keywords to target your ideal audience',
        images: [seo6, seo7],
        benefits: [
            'Target the right audience',
            'Discover profitable keywords',
            'Competitive analysis insights',
            'Long-tail keyword opportunities'
        ]
    },
    {
        name: 'Technical SEO',
        detail: 'Improve site speed, mobile-friendliness, and crawlability',
        images: [seo1, seo2],
        benefits: [
            'Faster page load times',
            'Mobile-responsive design',
            'Better site architecture',
            'Enhanced crawlability for search engines'
        ]
    },

    {
        name: 'SEO Analytics',
        detail: 'Track performance and refine strategies for continuous growth',
        images: [seo1, seo2],
        benefits: [
            'Real-time performance tracking',
            'Data-driven decision making',
            'ROI measurement and reporting',
            'Continuous optimization insights'
        ]
    }
]

const Seo = () => {
    const [selectedImage, setSelectedImage] = React.useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        })
        AOS.refresh()
    }, [])

    const openModal = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'unset'; // Re-enable scrolling
    };

    // Close modal on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [])

    return (
        <div>
            <Header />
            <main className="service-main">
                <section className="service-hero" data-aos="fade-down">
                    <h1>SEO Services</h1>
                    <p>Search Engine Optimization to boost your visibility and organic traffic.</p>
                </section>
                <section className="service-details">
                    <h2 data-aos="fade-up">Our SEO Solutions</h2>
                    <p className="seo-intro" data-aos="fade-up" data-aos-delay="100">
                        Drive more organic traffic and improve your search rankings with our comprehensive SEO services.
                        We use data-driven strategies to help your business grow online.
                    </p>
                    <div className="service-list">
                        {seoServices.map((srv, idx) => (
                            <div
                                className="service-block"
                                key={srv.name}
                                data-aos="fade-up"
                                data-aos-delay={idx * 100}
                            >
                                <h3>{srv.name}</h3>
                                <p>{srv.detail}</p>
                                <div className="service-images">
                                    {srv.images.map((img, i) => (
                                        <img
                                            src={img}
                                            alt={`${srv.name} results - ${i + 1}`}
                                            key={i}
                                            className="service-img"
                                            onClick={() => openModal(img)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    ))}
                                </div>
                                <div className="seo-benefits">
                                    <h4>Key Benefits:</h4>
                                    <ul>
                                        {srv.benefits.map((benefit, i) => (
                                            <li key={i}>{benefit}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="seo-stats" data-aos="zoom-in">
                    <h2>Proven Results</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">300%</div>
                            <div className="stat-label">Average Traffic Increase</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">Top 5</div>
                            <div className="stat-label">Ranking Positions</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">85%</div>
                            <div className="stat-label">Client Retention Rate</div>
                        </div>
                    </div>
                </section>
                <section className="service-cta" data-aos="fade-up">
                    <h3>Ready to boost your online visibility?</h3>
                    <p>Let's discuss how our SEO services can help your business grow</p>
                    <a href="/contact" className="cta-btn">Get Started</a>
                </section>
            </main>
            <Footer />

            {/* Image Modal */}
            {selectedImage && (
                <div className="image-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            ✕
                        </button>
                        <img src={selectedImage} alt="SEO Results" className="modal-image" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Seo
