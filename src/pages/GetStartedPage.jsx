import React, { useState } from 'react'
import { User, Users, ArrowRight, CheckCircle, Clock, Shield, Award, Mail, Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import DownloadModal from '../components/DownloadModal'
import './GetStartedPage.css'

const GetStartedPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalActiveTab, setModalActiveTab] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState(null)

  const howToGetStarted = [
    {
      icon: User,
      title: "For Consumers: Create Your Account",
      description: "Begin by entering your personal details and setting up a secure password. Verify your email to activate your account.",
      color: "blue",
      tabIndex: 0
    },
    {
      icon: Users,
      title: "For Providers: Register Your Services",
      description: "Fill out your profile with your service offerings, equipment details, and availability. Complete the background check and training modules.",
      color: "green",
      tabIndex: 1
    },
    {
      icon: Award,
      title: "Finalize and Start Using the App",
      description: "Once your account is set up, explore the app to schedule services or accept tasks. Enjoy the convenience of Tidyzon!",
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

  const faqs = [
    {
      question: "How do I sign up as a consumer?",
      answer: "To sign up as a consumer, visit our signup page and select 'Consumer Signup.' Fill in your details, including your name, email, and password. Once registered, you can start booking services immediately."
    },
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
      question: "Can I sign up using the mobile app?",
      answer: "Yes! You can sign up as either a consumer or provider directly through our mobile app. The process is optimized for mobile devices for your convenience."
    },
    {
      question: "What if I forget my password?",
      answer: "If you forget your password, use the 'Forgot Password' link on the login page. You'll receive an email with instructions to reset your password securely."
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
                <span className="gradient-text"> Seamless Service Solutions</span>
              </h1>
              <p className="hero-subtitle">
                Sign up today to connect with top-notch service providers or become one yourself, 
                delivering quality right to your doorstep.
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

        {/* Consumer Signup Guide */}
        <section className="consumer-guide">
          <div className="container">
            <div className="guide-header">
              <h2 className="section-title">Consumer Signup Guide</h2>
              <p className="section-subtitle">Step-by-Step Consumer Registration</p>
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

        {/* Provider Signup Instructions */}
        <section className="provider-guide">
          <div className="container">
            <h2 className="section-title">Provider Signup Instructions</h2>
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
            <h2 className="section-title">Signup Process FAQs</h2>
            <p className="section-subtitle">
              Here are some common questions about signing up as a consumer or provider on Tidyzon.
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
                Don't miss out on the opportunity to connect with quality service providers or to offer your services to eager customers. Whether you're looking to book a service or provide one, Tidyzon is your gateway to seamless transactions and exceptional service.
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
