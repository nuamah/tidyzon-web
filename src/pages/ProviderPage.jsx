import React, { useState } from 'react'
import { Users, ArrowRight, CheckCircle, Clock, Shield, Award, Mail, Phone, MapPin, ChevronDown, ChevronUp, DollarSign, Star, TrendingUp } from 'lucide-react'
import DownloadModal from '../components/DownloadModal'
import './ProviderPage.css'

const ProviderPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalActiveTab, setModalActiveTab] = useState(1)
  const [expandedFaq, setExpandedFaq] = useState(null)

  const howToGetStarted = [
    {
      icon: Users,
      title: "Register as a Provider",
      description: "Fill out your profile with your service offerings, equipment details, and availability. Complete the background check and training modules.",
      color: "green",
      tabIndex: 1
    },
    {
      icon: CheckCircle,
      title: "Get Verified & Approved",
      description: "Complete our verification process including background checks, document uploads, and mandatory training to ensure quality standards.",
      color: "blue",
      tabIndex: 1
    },
    {
      icon: Award,
      title: "Start Earning Money",
      description: "Once approved, start accepting tasks through our app and begin providing services to customers. Build your reputation and grow your business.",
      color: "purple",
      tabIndex: 1
    }
  ]

  const handleStepClick = (tabIndex) => {
    setModalActiveTab(tabIndex)
    setIsModalOpen(true)
  }

  const providerSteps = [
    {
      step: "1",
      title: "Begin Provider Signup",
      description: "To become a service provider on Tidyzon, start by visiting our signup page. Click on the 'Provider Signup' button to begin the process."
    },
    {
      step: "2",
      title: "Fill Out Profile Details",
      description: "You will be prompted to fill out a form with your personal details, including your full name, contact information, and address. Ensure all information is accurate."
    },
    {
      step: "3",
      title: "Upload Verification Documents",
      description: "Upload documents for verification, such as a valid ID and proof of residence. Complete our mandatory video-based training."
    },
    {
      step: "4",
      title: "Background Check & Approval",
      description: "Once your background check is cleared, and you have the necessary equipment, you will receive a notification confirming your approval."
    },
    {
      step: "5",
      title: "Start Accepting Tasks",
      description: "You can then start accepting tasks through our app and begin providing services to customers."
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Flexible Earning",
      description: "Work on your own schedule and earn competitive rates for your services. Set your availability and choose the tasks you want to complete."
    },
    {
      icon: Star,
      title: "Build Your Reputation",
      description: "Get rated by customers and build a strong profile that attracts more bookings. Quality service leads to higher ratings and more opportunities."
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description: "Access marketing tools and customer leads to grow your service business. Tidyzon helps connect you with customers who need your expertise."
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Get paid securely through our platform with guaranteed payments for completed work. No need to chase payments or handle billing."
    }
  ]

  const faqs = [
    {
      question: "What documents are required for provider signup?",
      answer: "For provider signup, you'll need to upload a valid ID, proof of residence, and any relevant certifications for your service area. Additional documents may be required based on your specific service type."
    },
    {
      question: "Is there a fee to join as a provider?",
      answer: "There is no upfront fee to join as a provider on Tidyzon. We operate on a commission-based model where a small percentage is deducted from completed service payments."
    },
    {
      question: "How long does the provider approval process take?",
      answer: "The provider approval process typically takes 1-3 business weeks after all required documents are submitted and background checks are completed."
    },
    {
      question: "Can I choose my own schedule?",
      answer: "Yes! As a provider, you have complete control over your schedule. You can set your availability and choose which tasks to accept based on your preferences."
    },
    {
      question: "How do I get paid for completed services?",
      answer: "Payments are processed securely through our platform. You'll receive payment for completed services within 2-3 business days after service completion."
    },
    {
      question: "What support is available for providers?",
      answer: "We provide comprehensive support including training materials, customer service assistance, and tools to help you succeed as a service provider."
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
      
      <div className="provider-page">
        {/* Hero Section */}
        <section className="provider-hero">
          <div className="hero-bg">
            <div className="hero-orb hero-orb-1"></div>
            <div className="hero-orb hero-orb-2"></div>
            <div className="hero-orb hero-orb-3"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Become a Tidyzon Provider: 
                <span className="gradient-text"> Earn Money Doing What You Love</span>
              </h1>
              <p className="hero-subtitle">
                Join our network of professional service providers and start earning money 
                by offering cleaning and maintenance services to customers in your area.
              </p>
              <button className="hero-cta" onClick={() => setIsModalOpen(true)}>
                Become a Provider
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="container">
            <h2 className="section-title">Why Join as a Provider?</h2>
            <p className="section-subtitle">Discover the advantages of becoming a Tidyzon service provider</p>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div key={index} className="benefit-card">
                    <div className="benefit-icon-wrapper">
                      <IconComponent className="benefit-icon" />
                    </div>
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-description">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* How to Get Started Section */}
        <section className="how-to-get-started">
          <div className="container">
            <h2 className="section-title">How to Become a Provider</h2>
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

        {/* Provider Signup Guide */}
        <section className="provider-guide">
          <div className="container">
            <div className="guide-header">
              <h2 className="section-title">Provider Signup Process</h2>
              <p className="section-subtitle">Step-by-Step Provider Registration</p>
            </div>
            <div className="provider-content">
              <div className="provider-text">
                <p>
                  To become a service provider on Tidyzon, start by visiting our signup page. Click on the 'Provider Signup' button to begin the process. You will be prompted to fill out a form with your personal details, including your full name, contact information, and address. Ensure all information is accurate to avoid delays in the approval process.
                </p>
                <p>
                  After submitting your details, you will need to upload documents for verification, such as a valid ID and proof of residence. Next, complete our mandatory video-based training to familiarize yourself with our service standards. Once your background check is cleared, and you have the necessary equipment, you will receive a notification confirming your approval. You can then start accepting tasks through our app.
                </p>
              </div>
              <div className="provider-steps">
                {providerSteps.map((step, index) => (
                  <div key={index} className="provider-step">
                    <div className="provider-step-number">{step.step}</div>
                    <div className="provider-step-content">
                      <h4 className="provider-step-title">{step.title}</h4>
                      <p className="provider-step-description">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-title">Provider FAQs</h2>
            <p className="section-subtitle">
              Here are some common questions about becoming a provider on Tidyzon.
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
              <h2 className="cta-title">Start Your Provider Journey Today!</h2>
              <p className="cta-subtitle">
                Join thousands of successful service providers who are earning money and growing their businesses through Tidyzon. Take control of your schedule and start providing quality services to customers in your area.
              </p>
              <button className="cta-button" onClick={() => setIsModalOpen(true)}>
                Become a Provider Now
                <ArrowRight className="btn-icon" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProviderPage
