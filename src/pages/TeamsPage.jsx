import React from 'react'
import { Users, Award, Mail, Linkedin, Github } from 'lucide-react'
import './TeamsPage.css'

const TeamsPage = () => {
  const executives = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image: "/assets/team/micheal.jpg",
      bio: "Visionary leader with 15+ years in the service industry, driving Tidyzon's mission to revolutionize home and car cleaning services.",
      email: "sarah@tidyzon.com",
      linkedin: "https://linkedin.com/in/sarahjohnson",
      github: null
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Chief Technology Officer",
      image: "/assets/tidyzon_welcome_05.png",
      bio: "Tech innovator passionate about building scalable platforms that connect customers with trusted service providers seamlessly.",
      email: "michael@tidyzon.com",
      linkedin: "https://linkedin.com/in/michaelchen",
      github: "https://github.com/michaelchen"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Head of Operations",
      image: "/assets/tidyzon_welcome_05.png",
      bio: "Operations expert ensuring every service meets our high standards of quality and customer satisfaction.",
      email: "emily@tidyzon.com",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      github: null
    }
  ]

  const teamMembers = [
    {
      id: 4,
      name: "David Kim",
      position: "Lead Developer",
      image: "/assets/team/george.jpg",
      bio: "Full-stack developer crafting the technology that powers our platform and enhances user experience.",
      email: "david@tidyzon.com",
      linkedin: "https://linkedin.com/in/davidkim",
      github: "https://github.com/davidkim"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Marketing Director",
      image: "/assets/team/iksoft.JPG",
      bio: "Creative marketer building brand awareness and connecting Tidyzon with customers who value quality service.",
      email: "lisa@tidyzon.com",
      linkedin: "https://linkedin.com/in/lisathompson",
      github: null
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Customer Success Manager",
      image: "/assets/tidyzon_welcome_05.png",
      bio: "Customer advocate ensuring every interaction exceeds expectations and builds lasting relationships.",
      email: "james@tidyzon.com",
      linkedin: "https://linkedin.com/in/jameswilson",
      github: null
    }
  ]

  return (
    <div className="teams-page">
      {/* Hero Section */}
      <section className="teams-hero">
        <div className="hero-background">
          <div className="hero-pattern"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Users className="badge-icon" />
              <span>Our Team</span>
            </div>
            <h1 className="hero-title">
              Meet the People Behind
              <br />
              <span className="gradient-text">Tidyzon's Success</span>
            </h1>
            <p className="hero-subtitle">
              A dedicated team of professionals committed to delivering exceptional cleaning services 
              and building lasting relationships with our customers and service providers.
            </p>
          </div>
        </div>
      </section>

      {/* Executives Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Executive Leadership</h2>
            <p className="section-subtitle">Meet our visionary leaders driving Tidyzon's mission forward</p>
          </div>
          <div className="team-grid executives-grid">
            {executives.map((member) => (
              <div key={member.id} className="team-card executive-card">
                <div className="member-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member-image"
                  />
                  <div className="member-overlay">
                    <div className="social-links">
                      <a href={`mailto:${member.email}`} className="social-link" title="Email">
                        <Mail className="social-icon" />
                      </a>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                          <Linkedin className="social-icon" />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                          <Github className="social-icon" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section our-team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Team</h2>
            <p className="section-subtitle">The dedicated professionals making Tidyzon's vision a reality</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="member-image-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="member-image"
                  />
                  <div className="member-overlay">
                    <div className="social-links">
                      <a href={`mailto:${member.email}`} className="social-link" title="Email">
                        <Mail className="social-icon" />
                      </a>
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                          <Linkedin className="social-icon" />
                        </a>
                      )}
                      {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                          <Github className="social-icon" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="join-team-section">
        <div className="container">
          <div className="join-team-content">
            <div className="join-team-text">
              <h2 className="join-team-title">Join Our Growing Team</h2>
              <p className="join-team-subtitle">
                We're always looking for passionate individuals who share our vision of 
                delivering exceptional service experiences. Come be part of the Tidyzon family!
              </p>
              <div className="join-team-features">
                <div className="feature-item">
                  <Award className="feature-icon" />
                  <span>Competitive benefits and growth opportunities</span>
                </div>
                <div className="feature-item">
                  <Users className="feature-icon" />
                  <span>Collaborative and inclusive work environment</span>
                </div>
                <div className="feature-item">
                  <Award className="feature-icon" />
                  <span>Make a real impact in the service industry</span>
                </div>
              </div>
              <a href="/open-positions" className="join-team-cta">
                View Open Positions
                <Award className="btn-icon" />
              </a>
            </div>
            <div className="join-team-image">
              <div className="team-illustration">
                <Users className="team-illustration-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TeamsPage
