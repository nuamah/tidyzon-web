import React, { useState } from 'react'
import { User, ArrowRight, CheckCircle, Clock, Shield, Award, Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import DownloadModal from '../components/DownloadModal'
import './GetStartedPage.css'

const GetStartedPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalActiveTab, setModalActiveTab] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState(null)

  const howToGetStarted = [
    {
      icon: User,
      title: "Create Your User Account",
      description: "Begin by entering your personal details and setting up a secure password. Verify your email to activate your account.",
      color: "blue",
      tabIndex: 0
    },
    {
      icon: CheckCircle,
      title: "Browse Available Services",
      description: "Explore our wide range of cleaning and maintenance services. Find exactly what you need for your home or business.",
      color: "green",
      tabIndex: 0
    },
    {
      icon: Award,
      title: "Book and Enjoy Quality Service",
      description: "Schedule services at your convenience and enjoy professional, reliable service delivery right to your doorstep.",
      color: "purple",
      tabIndex: 0
    }
  ]

  const handleStepClick = (tabIndex) => {
    setModalActiveTab(tabIndex)
    setIsModalOpen(true)
  }

  const consumerSteps = [
    {
      step: "1",
      title: "Visit Registration Page",
      description: "To sign up as a consumer, visit the registration page and fill in your name, email, and contact number. Choose a strong password for security."
    },
    {
      step: "2", 
      title: "Verify Your Email",
      description: "After submitting your details, check your email for a verification link. Click the link to confirm your account and gain access to our services."
    },
    {
      step: "3",
      title: "Start Booking Services",
      description: "Once verified, log in to the app to browse available services. Schedule tasks at your convenience and enjoy seamless service delivery."
    }
  ]


  const faqs = [
    {
      question: "How do I sign up as a user?",
      answer: "To sign up as a user, visit our signup page and fill in your details, including your name, email, and password. Once registered, you can start booking services immediately."
    },
    {
      question: "What services can I book through Tidyzon?",
      answer: "You can book a wide range of cleaning and maintenance services including house cleaning, car washing, window cleaning, and more. All services are provided by verified professionals."
    },
    {
      question: "How do I schedule a service?",
      answer: "Simply browse available services in the app, select your preferred time slot, and confirm your booking. You'll receive real-time updates about your service provider's arrival."
    },
    {
      question: "Can I cancel or reschedule my booking?",
      answer: "Yes, you can cancel or reschedule your booking up to 2 hours before the scheduled time through the app. Cancellation policies may vary depending on the service type."
    },
    {
      question: "How do I pay for services?",
      answer: "You can pay securely through the app using credit/debit cards or digital wallets. Payment is processed after service completion, ensuring you're satisfied with the work."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "If you're not satisfied with the service, please contact our customer support team within 24 hours. We'll work to resolve the issue and ensure your satisfaction."
    }
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <DownloadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        activeTab={modalActiveTab}
      />
      
      <div className="get-started-page">
        {/* Hero Section */}
        <section className="get-started-hero">
          <div className="hero-bg">
            <div className="hero-orb hero-orb-1"></div>
            <div className="hero-orb hero-orb-2"></div>
            <div className="hero-orb hero-orb-3"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Join Tidyzon: Your Gateway to 
                <span className="gradient-text"> Professional Services</span>
              </h1>
              <p className="hero-subtitle">
                Sign up today to access top-notch cleaning and maintenance services, 
                delivered right to your doorstep by verified professionals.
              </p>
              <button className="hero-cta" onClick={() => setIsModalOpen(true)}>
                Get Started Now
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </section>

        {/* How to Get Started Section */}
        <section className="how-to-get-started">
          <div className="container">
            <h2 className="section-title">How to Get Started</h2>
            <div className="steps-grid">
              {howToGetStarted.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div key={index} className={`step-card ${step.status} step-${step.color}`}>
                    <div className="step-icon-wrapper">
                      <IconComponent className="step-icon" />
                    </div>
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                    <button className="step-cta" onClick={() => handleStepClick(step.tabIndex)}>
                      Start Now
                      <ArrowRight className="btn-icon" />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* User Signup Guide */}
        <section className="consumer-guide">
          <div className="container">
            <div className="guide-header">
              <h2 className="section-title">User Signup Guide</h2>
              <p className="section-subtitle">Step-by-Step User Registration</p>
            </div>
            <div className="steps-container">
              {consumerSteps.map((step, index) => (
                <div key={index} className="guide-step">
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <h3 className="step-content-title">{step.title}</h3>
                    <p className="step-content-description">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-title">User FAQs</h2>
            <p className="section-subtitle">
              Here are some common questions about using Tidyzon as a user.
            </p>
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    className="faq-question"
                    onClick={() => toggleFaq(index)}
                  >
                    <span>{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="faq-icon" />
                    ) : (
                      <ChevronDown className="faq-icon" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta">
          <div className="container">
            <div className="final-cta-card">
              <div className="cta-glow-effect"></div>
              <h2 className="cta-title">Join the Tidyzon Community Today!</h2>
              <p className="cta-subtitle">
                Don't miss out on the opportunity to access quality cleaning and maintenance services. Join thousands of satisfied customers who trust Tidyzon for their home and business service needs.
              </p>
              <button className="cta-button" onClick={() => setIsModalOpen(true)}>
                Sign Up Now
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default GetStartedPage
