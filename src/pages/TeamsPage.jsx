import React from 'react'
import { Users, Award, Mail, Linkedin, Github } from 'lucide-react'
import './TeamsPage.css'

// Function to generate avatar initials
const generateAvatar = (name) => {
  const initials = name.split(' ').map(word => word.charAt(0)).join('').toUpperCase()
  return initials
}

const TeamsPage = () => {
  const executives = [
    {
      id: 1,
      name: "Dan Grasso",
      position: "Co founder / Board Member",
      image: "/assets/team/Dan Grasso2.jpg",
      bio: "Operations expert focused on optimizing processes, building efficient systems, and ensuring exceptional customer experiences.",
      email: "dan@tidyzon.com",
      linkedin: "https://linkedin.com/in/dangrasso",
      github: null
    },
    {
      id: 2,
      name: "Emmanuel Zielonka Berchie",
      position: "Co-Founder / Board Member",
      image: "/assets/team/emmaNew.jpg",
      bio: "Visionary leader driving innovation and strategic growth in the service industry with a passion for excellence.",
      email: "emmanuel@tidyzon.com",
      linkedin: "https://linkedin.com/in/emmanuelzielonka",
      github: null
    },
    {
      id: 3,
      name: "Martin Zielonka",
      position: "Co founder/ Board Member",
      image: "/assets/team/Martin Zielonka.jpg",
      bio: "Strategic leader with 15+ years of experience in scaling technology companies and driving operational excellence.",
      email: "martin@tidyzon.com",
      linkedin: "https://linkedin.com/in/martinzielonka",
      github: null
    },
    {
      id: 4,
      name: "Micheal Akwasi Osei",
      position: "Co-Founder / UI Blueprint / Board Member",
      image: "/assets/team/micheal.jpg",
      bio: "Innovative UI Blueprint Developer with expertise in translating design systems into scalable, modular front-end architectures.",
      email: "michael@tidyzon.com",
      linkedin: "https://linkedin.com/in/michealakwasiosei",
      github: null
    },
    {
      id: 5,
      name: "Dr. Sanju Abraham",
      position: "Team Leader / Supervisor / Board Member",
      image: "/assets/team/Sanju Abraham.jpg",
      bio: "Serial startup CTO (engineering, AI, scaling orgs)",
      email: "sanju@tidyzon.com",
      linkedin: "https://linkedin.com/in/drsanjuabraham",
      github: null
    },
    {
      id: 6,
      name: "Isaac Paintsil",
      position: "Board Member",
      image: "/assets/team/Isaac Pinstil.jpg",
      bio: "Technology visionary passionate about building scalable platforms and leading engineering teams to deliver innovative solutions.",
      email: "isaac@tidyzon.com",
      linkedin: "https://linkedin.com/in/isaacpaintsil",
      github: null
    }
  ]

  const teamMembers = [
    {
      id: 7,
      name: "Nuamah George",
      position: "Team President / Backend Developer",
      image: "/assets/team/george.jpg",
      bio: "Experienced project manager overseeing development workflows and ensuring timely delivery of high-quality solutions.",
      email: "george@tidyzon.com",
      linkedin: "https://linkedin.com/in/nuamahgeorge",
      github: "https://github.com/nuamahgeorge"
    },
    {
      id: 8,
      name: "Adu Amankwah Isaac",
      position: "Team Assistant / Frontend Supervisor",
      image: "/assets/team/iksoftImage.png",
      bio: "Frontend supervisor leading the development of user interfaces and ensuring optimal user experiences across all platforms.",
      email: "business.iksofttechnologies@gmail.com",
      linkedin: "https://www.linkedin.com/in/adu-amankwah-isaac-46842a185/",
      github: "https://github.com/iksoft"
    },
    {
      id: 16,
      name: "Sonie",
      position: "Team Leader Assistant",
      image: null,
      bio: "Supports team operations and assists frontend delivery to ensure consistent UI quality.",
      email: "sonie@tidyzon.com",
      linkedin: null,
      github: null
    },
    {
      id: 9,
      name: "Benedict Boadu-Boateng",
      position: "Backend Developer",
      image: null,
      bio: "Skilled backend developer building robust server-side solutions and maintaining database integrity.",
      email: "benedict@tidyzon.com",
      linkedin: "https://linkedin.com/in/benedictboadu",
      github: "https://github.com/benedictboadu"
    },
    {
      id: 10,
      name: "Randy Otabil Odoom",
      position: "Frontend Developer",
      image: null,
      bio: "Creative frontend developer crafting responsive user interfaces and implementing modern web technologies.",
      email: "randy@tidyzon.com",
      linkedin: "https://linkedin.com/in/randyotabil",
      github: "https://github.com/randyotabil"
    },
    {
      id: 11,
      name: "Kwamena Essiful-Ansah",
      position: "Backend Developer",
      image: null,
      bio: "Experienced backend developer specializing in scalable architecture and API development.",
      email: "kwamena@tidyzon.com",
      linkedin: "https://linkedin.com/in/kwamenaessiful",
      github: "https://github.com/kwamenaessiful"
    },
    {
      id: 12,
      name: "John Kennedy Martey Tetteh",
      position: "Frontend Developer",
      image: null,
      bio: "Frontend developer passionate about creating intuitive user experiences and implementing modern design patterns.",
      email: "john@tidyzon.com",
      linkedin: "https://linkedin.com/in/johnkennedy",
      github: "https://github.com/johnkennedy"
    },
    {
      id: 13,
      name: "Awuah Maxwell Twerefour",
      position: "Frontend Developer",
      image: null,
      bio: "Frontend developer focused on building responsive web applications and optimizing user interface performance.",
      email: "maxwell@tidyzon.com",
      linkedin: "https://linkedin.com/in/maxwelltwerefour",
      github: "https://github.com/maxwelltwerefour"
    },
    {
      id: 14,
      name: "Patrick Asiedu",
      position: "Frontend Developer",
      image: null,
      bio: "Frontend developer dedicated to creating seamless user experiences and implementing cutting-edge web technologies.",
      email: "patrick@tidyzon.com",
      linkedin: "https://linkedin.com/in/patrickasiedu",
      github: "https://github.com/patrickasiedu"
    },
    {
      id: 15,
      name: "Frank Mensah",
      position: "UI/UX Designer",
      image: null,
      bio: "Creative UI/UX designer crafting beautiful and functional designs that enhance user engagement and satisfaction.",
      email: "frank@tidyzon.com",
      linkedin: "https://linkedin.com/in/frankmensah",
      github: null
    },
    {
      id: 17,
      name: "Sammy",
      position: "UI/UX Designer",
      image: null,
      bio: "Designs intuitive user interfaces and user journeys focused on clarity and usability.",
      email: "sammy@tidyzon.com",
      linkedin: null,
      github: null
    },
    {
      id: 18,
      name: "Fred",
      position: "Backend Developer",
      image: null,
      bio: "Builds reliable backend services and APIs with a focus on performance and security.",
      email: "fred@tidyzon.com",
      linkedin: null,
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
                    {member.image && !member.image.includes('tidyzon_welcome_05.png') ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="member-image"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="member-avatar">
                        <span className="avatar-initials">{generateAvatar(member.name)}</span>
                      </div>
                    )}
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
                    {member.image && !member.image.includes('tidyzon_welcome_05.png') ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="member-image"
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="member-avatar">
                        <span className="avatar-initials">{generateAvatar(member.name)}</span>
                      </div>
                    )}
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
