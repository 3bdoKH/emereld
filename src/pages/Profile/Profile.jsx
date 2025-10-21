import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import gradient from './gradient.png'
import './Profile.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { projects } from '../../data'

const Profile = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
    AOS.refresh()
  }, [])
  return (
    <div className='container'>
      <Header />
      <main className='profile'>
        <img src={gradient} alt="gradient" className='gradient-image' />
        <div className="summary" data-aos="zoom-in" data-aos-delay="200">
          <h1>Our Portfolio</h1>
          <span>
            Explore our diverse range of successful projects
          </span>
          <p>
            We've helped businesses across various industries establish their online presence.
            Check out some of our featured projects below.
          </p>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <div className="project-image">
                <img
                  src={require(`../../images/projects/${project.image}`)}
                  alt={project.title}
                />
              </div>
              <div className="project-info">
                <div className="project-header">
                  <h2>{project.title}</h2>
                  <span className="project-year">{project.yearCompleted}</span>
                </div>
                <span className="project-type">{project.clientType}</span>
                <p>{project.description}</p>

                <div className="project-features">
                  <h3>Key Features</h3>
                  <ul>
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-footer">
                  <div className="project-domain">
                    <span>Website:</span>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.domain}
                    </a>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="visit-site"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="get-in-touch" data-aos="fade-up">
          <h3>Have a Project in Mind?</h3>
          <p>
            Contact us today to discuss how we can help you establish your online presence.
          </p>
          <a href="/contact">
            Get in Touch
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Profile
