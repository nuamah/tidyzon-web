import React, { useState } from 'react'
import { Target, Eye, Award, ArrowRight } from 'lucide-react'
import DownloadModal from '../components/DownloadModal'
import './AboutPage.css'

const AboutPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-bg"></div>
          <div className="container">
            <div className="about-hero-content">
              <h1 className="about-hero-title">
                Discover the Story Behind <span className="gradient-text">Tidyzon</span>
              </h1>
              <p className="about-hero-subtitle">
                Explore the journey of Tidyzon, where quality service meets innovation, connecting you with trusted providers for all your cleaning needs.
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section className="story-section">
          <div className="container">
            <div className="story-grid">
              <div className="story-content">
                <h2 className="story-title">Our Journey</h2>
                <p className="story-text">
                  Tidyzon was born out of a desire to simplify everyday chores by connecting consumers with reliable service providers. Founded in 2021, our mission was clear: to deliver quality service right at your doorstep. Our founders, inspired by the need for dependable and convenient cleaning solutions, set out to create a platform that bridges the gap between consumers and skilled professionals.
                </p>
                <p className="story-text">
                  Today, Tidyzon stands as a testament to innovation and dedication, ensuring that every task is handled with care and precision.
                </p>
              </div>
              <div className="story-image">
                <img 
                  src="/assets/discover.jpg" 
                  alt="Discover Tidyzon's journey"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-content">
              <div className="mission-icon-wrapper">
                <Target className="mission-icon" />
              </div>
              <h2 className="mission-title">Our Mission</h2>
              <h3 className="mission-subtitle">Driven by Excellence</h3>
              <div className="mission-text-content">
                <p className="mission-text">
                  At Tidyzon, our mission is to revolutionize the way cleaning services are delivered. We are committed to providing exceptional service that exceeds customer expectations, ensuring that every interaction is seamless and satisfying. Our team is driven by a passion for excellence, constantly striving to enhance our offerings and deliver unparalleled convenience.
                </p>
                <p className="mission-text">
                  We believe in empowering our providers with the tools and training they need to succeed, fostering a community of trust and reliability. Join us on our journey to redefine quality service, one task at a time.
                </p>
                <p className="mission-text">
                  Our dedication to quality is unwavering, and we take pride in the rigorous standards we uphold. From thorough background checks to comprehensive training, we ensure that our providers are equipped to deliver the highest level of service. At Tidyzon, your satisfaction is our priority, and we are committed to making your life easier, one clean at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="vision-section">
          <div className="container">
            <div className="vision-content">
              <div className="vision-icon-wrapper">
                <Eye className="vision-icon" />
              </div>
              <h2 className="vision-title">Our Vision for the Future</h2>
              <div className="vision-text-content">
                <p className="vision-text">
                  At Tidyzon, we envision a future where quality service is seamlessly integrated into everyday life, enhancing the well-being of our community. Our goal is to revolutionize the service industry by setting new standards of excellence, ensuring that every interaction is marked by professionalism and care. We aim to empower local service providers, fostering a network that thrives on mutual respect and innovation.
                </p>
                <p className="vision-text">
                  By leveraging technology, we aspire to create a sustainable and efficient ecosystem that benefits both consumers and providers, ultimately contributing to a cleaner, more organized world.
                </p>
                <p className="vision-text">
                  Our vision extends beyond immediate service delivery; we are committed to making a lasting impact on the communities we serve. We believe in supporting local economies by providing opportunities for growth and development to our service providers. Through continuous improvement and adaptation, Tidyzon strives to be a leader in the service industry, known for its integrity and dedication to customer satisfaction.
                </p>
                <p className="vision-text">
                  As we look to the future, Tidyzon is dedicated to expanding our reach and enhancing our service offerings. We are committed to innovation, constantly seeking new ways to improve our processes and deliver exceptional value to our customers. Our vision is to be the preferred choice for quality service, recognized for our commitment to excellence and our ability to adapt to the ever-changing needs of our clients. By prioritizing sustainability and community engagement, we aim to leave a positive legacy for future generations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Commitment Section */}
        <section className="quality-section">
          <div className="container">
            <div className="quality-content">
              <div className="quality-icon-wrapper">
                <Award className="quality-icon" />
              </div>
              <h2 className="quality-title">Our Commitment to Quality</h2>
              <div className="quality-text-content">
                <p className="quality-text">
                  Tidyzon is unwavering in its commitment to delivering quality service at every doorstep. Our providers undergo rigorous training and background checks to ensure they meet the highest standards of professionalism and expertise. We believe that quality service is not just a promise but a practice that is reflected in every task we undertake. Our commitment to excellence is evident in our meticulous attention to detail and our dedication to customer satisfaction.
                </p>
                <p className="quality-text">
                  We set stringent standards for our service providers, requiring them to possess the necessary equipment and skills to perform their tasks efficiently. Our quality assurance processes are designed to ensure that every service delivered meets our high expectations, providing peace of mind to our clients. At Tidyzon, we are dedicated to continuous improvement, always seeking feedback and implementing changes that enhance the quality of our services.
                </p>
                <p className="quality-text">
                  At Tidyzon, we understand that quality service is the cornerstone of our business. Our commitment to excellence is reflected in our comprehensive training programs, which equip our providers with the skills and knowledge they need to deliver outstanding service. We believe in fostering a culture of accountability and transparency, ensuring that our clients receive the best possible experience.
                </p>
                <p className="quality-text">
                  Our quality commitment extends beyond service delivery; it encompasses every aspect of our operations. From the moment a task is scheduled to its completion, we prioritize efficiency, reliability, and customer satisfaction. We are committed to building lasting relationships with our clients, based on trust and mutual respect. At Tidyzon, quality is not just a goal; it is a promise we make to every customer, every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta-section">
          <div className="container">
            <div className="about-cta-card">
              <h2 className="cta-title">Discover Our Exceptional Services</h2>
              <p className="cta-subtitle">
                Join the Tidyzon community today and experience unparalleled convenience with our top-notch services. Whether you need a quick car clean or a thorough trash bin wash, our trusted providers are ready to assist you. Sign up now and enjoy quality service at your doorstep!
              </p>
              <button className="btn-cta-white" onClick={() => setIsModalOpen(true)}>
                Get Started
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutPage
