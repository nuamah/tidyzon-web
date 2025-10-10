import React from 'react'
import { Users, Award, Mail, Linkedin, Github } from 'lucide-react'
import './TeamsPage.css'

const TeamsPage = () => {
  const executives = [
    {
      id: 1,
      name: "Emmanuel Zielonka Berchie",
      position: "Co-Founder",
      image: "/assets/team/Emmanuel Zeolonki.jpg",
      bio: "Visionary leader driving innovation and strategic growth in the service industry with a passion for excellence.",
      email: "emmanuel@tidyzon.com",
      linkedin: "https://linkedin.com/in/emmanuelzielonka",
      github: null
    },
    {
      id: 2,
      name: "Micheal Akwasi Osei",
      position: "Co-Founder",
      image: "/assets/team/micheal.jpg",
      bio: "Innovative UI Blueprint Developer with expertise in translating design systems into scalable, modular front-end architectures.",
      email: "michael@tidyzon.com",
      linkedin: "https://linkedin.com/in/michealakwasiosei",
      github: null
    },
    {
      id: 3,
      name: "Dr. Sanju Abraham",
      position: "Team Leader / Supervisor",
      image: "/assets/team/Sanju Abraham.jpg",
      bio: "Serial startup CTO (engineering, AI, scaling orgs)",
      email: "sanju@tidyzon.com",
      linkedin: "https://linkedin.com/in/drsanjuabraham",
      github: null
    }
  ]

  const teamMembers = [
    {
      id: 4,
      name: "Nuamah George",
      position: "Developer",
      image: "/assets/team/george.jpg",
      bio: "Passionate developer building innovative solutions and maintaining high-quality code standards.",
      email: "george@tidyzon.com",
      linkedin: "https://linkedin.com/in/nuamahgeorge",
      github: "https://github.com/nuamahgeorge"
    },
    {
      id: 5,
      name: "Adu Amankwah Isaac",
      position: "Developer",
      image: "/assets/team/iksoft.JPG",
      bio: "Skilled developer focused on creating seamless user experiences and robust backend systems.",
      email: "business.iksofttechnologies@gmail.com",
      linkedin: "https://www.linkedin.com/in/adu-amankwah-isaac-46842a185/",
      github: "https://github.com/iksoft"
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
    },
    {
      id: 7,
      name: "Lisa Thompson",
      position: "Marketing Director",
      image: "/assets/tidyzon_welcome_05.png",
      bio: "Creative marketer building brand awareness and connecting Tidyzon with customers who value quality service.",
      email: "lisa@tidyzon.com",
      linkedin: "https://linkedin.com/in/lisathompson",
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
                      loading="lazy"
                      decoding="async"
                    />
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
                      loading="lazy"
                      decoding="async"
                    />
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
