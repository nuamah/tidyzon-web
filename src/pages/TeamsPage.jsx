import React from 'react'
import { Users, Award, Mail, Linkedin, Github } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import './TeamsPage.css'

// Function to generate avatar initials
const generateAvatar = (name) => {
  const initials = name.split(' ').map(word => word.charAt(0)).join('').toUpperCase()
  return initials
}

const TeamsPage = () => {
  const { t } = useTranslation('teams')
  const executives = [
    {
      id: 1,
      name: "Dan Grasso",
      position: t('members.danGrasso.position'),
      image: "/assets/team/Dan Grasso2.jpg",
      bio: t('members.danGrasso.bio'),
      email: "dan@tidyzon.com",
      linkedin: "https://linkedin.com/in/dangrasso",
      github: null
    },
    {
      id: 2,
      name: "Emmanuel Zielonka",
      position: t('members.emmanuelZielonka.position'),
      image: "/assets/team/emmaNew.jpg",
      bio: t('members.emmanuelZielonka.bio'),
      email: "emmanuel@tidyzon.com",
      linkedin: "https://linkedin.com/in/emmanuelzielonka",
      github: null
    },
    {
      id: 3,
      name: "Martin Zielonka",
      position: t('members.martinZielonka.position'),
      image: "/assets/team/Martin Zielonka.jpg",
      bio: t('members.martinZielonka.bio'),
      email: "martin@tidyzon.com",
      linkedin: "https://linkedin.com/in/martinzielonka",
      github: null
    },
    {
      id: 4,
      name: "Micheal Akwasi Osei",
      position: t('members.michealAkwasiOsei.position'),
      image: "/assets/team/micheal.jpg",
      bio: t('members.michealAkwasiOsei.bio'),
      email: "michael@tidyzon.com",
      linkedin: "https://linkedin.com/in/michealakwasiosei",
      github: null
    },
    {
      id: 5,
      name: "Dr. Sanju Abraham",
      position: t('members.sanjuAbraham.position'),
      image: "/assets/team/Sanju Abraham.jpg",
      bio: t('members.sanjuAbraham.bio'),
      email: "sanju@tidyzon.com",
      linkedin: "https://linkedin.com/in/drsanjuabraham",
      github: null
    },
    {
      id: 6,
      name: "Isaac Paintsil",
      position: t('members.isaacPaintsil.position'),
      image: "/assets/team/Isaac Pinstil.jpg",
      bio: t('members.isaacPaintsil.bio'),
      email: "isaac@tidyzon.com",
      linkedin: "https://linkedin.com/in/isaacpaintsil",
      github: null
    }
  ]

  const teamMembers = [
    {
      id: 7,
      name: "Nuamah George",
      position: t('members.nuamahGeorge.position'),
      image: "/assets/team/george.jpg",
      bio: t('members.nuamahGeorge.bio'),
      email: "george@tidyzon.com",
      linkedin: "https://linkedin.com/in/nuamahgeorge",
      github: "https://github.com/nuamahgeorge"
    },
    {
      id: 8,
      name: "Adu Amankwah Isaac",
      position: t('members.aduAmankwahIsaac.position'),
      image: "/assets/team/iksoftImage.png",
      bio: t('members.aduAmankwahIsaac.bio'),
      email: "business.iksofttechnologies@gmail.com",
      linkedin: "https://www.linkedin.com/in/adu-amankwah-isaac-46842a185/",
      github: "https://github.com/iksoft"
    },
    {
      id: 16,
      name: "Sonie",
      position: t('members.sonie.position'),
      image: null,
      bio: t('members.sonie.bio'),
      email: "sonie@tidyzon.com",
      linkedin: null,
      github: null
    },
    {
      id: 9,
      name: "Benedict Boadu-Boateng",
      position: t('members.benedictBoaduBoateng.position'),
      image: null,
      bio: t('members.benedictBoaduBoateng.bio'),
      email: "benedict@tidyzon.com",
      linkedin: "https://linkedin.com/in/benedictboadu",
      github: "https://github.com/benedictboadu"
    },
    {
      id: 10,
      name: "Randy Otabil Odoom",
      position: t('members.randyOtabilOdoom.position'),
      image: null,
      bio: t('members.randyOtabilOdoom.bio'),
      email: "randy@tidyzon.com",
      linkedin: "https://linkedin.com/in/randyotabil",
      github: "https://github.com/randyotabil"
    },
    {
      id: 11,
      name: "Kwamena Essiful-Ansah",
      position: t('members.kwamenaEssifulAnsah.position'),
      image: null,
      bio: t('members.kwamenaEssifulAnsah.bio'),
      email: "kwamena@tidyzon.com",
      linkedin: "https://linkedin.com/in/kwamenaessiful",
      github: "https://github.com/kwamenaessiful"
    },
    {
      id: 12,
      name: "John Kennedy Martey Tetteh",
      position: t('members.johnKennedyMarteyTetteh.position'),
      image: null,
      bio: t('members.johnKennedyMarteyTetteh.bio'),
      email: "john@tidyzon.com",
      linkedin: "https://linkedin.com/in/johnkennedy",
      github: "https://github.com/johnkennedy"
    },
    {
      id: 13,
      name: "Awuah Maxwell Twerefour",
      position: t('members.awuahMaxwellTwerefour.position'),
      image: null,
      bio: t('members.awuahMaxwellTwerefour.bio'),
      email: "maxwell@tidyzon.com",
      linkedin: "https://linkedin.com/in/maxwelltwerefour",
      github: "https://github.com/maxwelltwerefour"
    },
    {
      id: 14,
      name: "Patrick Asiedu",
      position: t('members.patrickAsiedu.position'),
      image: null,
      bio: t('members.patrickAsiedu.bio'),
      email: "patrick@tidyzon.com",
      linkedin: "https://linkedin.com/in/patrickasiedu",
      github: "https://github.com/patrickasiedu"
    },
    {
      id: 15,
      name: "Frank Mensah",
      position: t('members.frankMensah.position'),
      image: null,
      bio: t('members.frankMensah.bio'),
      email: "frank@tidyzon.com",
      linkedin: "https://linkedin.com/in/frankmensah",
      github: null
    },
    {
      id: 17,
      name: "Sammy",
      position: t('members.sammy.position'),
      image: null,
      bio: t('members.sammy.bio'),
      email: "sammy@tidyzon.com",
      linkedin: null,
      github: null
    },
    {
      id: 18,
      name: "Fred",
      position: t('members.fred.position'),
      image: null,
      bio: t('members.fred.bio'),
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
              <span>{t('hero.badge')}</span>
            </div>
            <h1 className="hero-title">
              {t('hero.titleLine1')}
              <br />
              <span className="gradient-text">{t('hero.titleBrandLine')}</span>
            </h1>
            <p className="hero-subtitle">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Executives Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('executives.title')}</h2>
            <p className="section-subtitle">{t('executives.subtitle')}</p>
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
                        width={800}
                        height={600}
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
            <h2 className="section-title">{t('team.title')}</h2>
            <p className="section-subtitle">{t('team.subtitle')}</p>
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
                        width={800}
                        height={600}
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
              <h2 className="join-team-title">{t('join.title')}</h2>
              <p className="join-team-subtitle">
                {t('join.subtitle')}
              </p>
              <div className="join-team-features">
                <div className="feature-item">
                  <Award className="feature-icon" />
                  <span>{t('join.features.0')}</span>
                </div>
                <div className="feature-item">
                  <Users className="feature-icon" />
                  <span>{t('join.features.1')}</span>
                </div>
                <div className="feature-item">
                  <Award className="feature-icon" />
                  <span>{t('join.features.2')}</span>
                </div>
              </div>
              <a href="/open-positions" className="join-team-cta">
                {t('join.cta')}
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
