import React, { useEffect } from 'react';
import './Certifications.css';
import { FaAward, FaCalendarAlt, FaCheckCircle, FaDownload, FaLink, FaStar } from 'react-icons/fa';
import { MdVerified, MdSchool, MdSecurity } from 'react-icons/md';
import { Zap } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Web Development Excellence",
      issuer: "Tech Academy International",
      date: "2024",
      credentialId: "WD2024-1234",
      description: "Advanced certification in modern web development technologies including React, Node.js, and cloud deployment.",
      skills: ["React", "Node.js", "Cloud Computing", "API Development"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&auto=format&fit=crop&q=80",
      verificationLink: "https://techacademy.com/verify/WD2024-1234",
      validUntil: "2026",
      level: "Advanced",
      credentialType: "Professional Certificate"
    },
    {
      id: 2,
      title: "Full Stack Development Master",
      issuer: "Digital Skills Institute",
      date: "2024",
      credentialId: "FSM-5678",
      description: "Comprehensive certification covering both frontend and backend development with modern frameworks and best practices.",
      skills: ["Frontend Development", "Backend Development", "Database Design", "System Architecture"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&auto=format&fit=crop&q=80",
      verificationLink: "https://dsi.edu/verify/FSM-5678",
      validUntil: "2026",
      level: "Master",
      credentialType: "Master Certificate"
    },
    {
      id: 3,
      title: "UI/UX Design Professional",
      issuer: "Design Academy Pro",
      date: "2023",
      credentialId: "UX-9012",
      description: "Professional certification in user interface and user experience design principles and practices.",
      skills: ["UI Design", "UX Research", "Prototyping", "User Testing"],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&auto=format&fit=crop&q=80",
      verificationLink: "https://designacademy.pro/verify/UX-9012",
      validUntil: "2025",
      level: "Professional",
      credentialType: "Professional Certificate"
    },
    {
      id: 4,
      title: "Agile Development Expert",
      issuer: "Agile Institute",
      date: "2023",
      credentialId: "ADE-3456",
      description: "Expert-level certification in Agile methodologies and project management practices.",
      skills: ["Agile Methodologies", "Scrum", "Project Management", "Team Leadership"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&auto=format&fit=crop&q=80",
      verificationLink: "https://agileinstitute.com/verify/ADE-3456",
      validUntil: "2025",
      level: "Expert",
      credentialType: "Expert Certificate"
    }
  ];

  useEffect(() => {
    // Add animation to cards on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.certification-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="services-page">
      <div className="shero-sections">
        <div className="shero-backgrounds">
          <Zap className="hero-icon" />
          <h1 className="shero-title">
            <span className="gradient-text">Professional</span>
            <br />
            Certifications
          </h1>
          <p className="shero-description">Validated expertise and continuous learning in technology and development</p>
        </div>
      </div>

      <div className="certifications-container">
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="cert-badge">
                  <MdVerified className="badge-icon" />
                  {cert.level}
                </div>
              </div>
              <div className="certification-content">
                <div className="cert-header">
                  <h2>{cert.title}</h2>
                  <span className="cert-type">{cert.credentialType}</span>
                </div>
                <div className="certification-issuer">
                  <div className="issuer-info">
                    <MdSchool className="issuer-icon" />
                    <span className="issuer-name">{cert.issuer}</span>
                  </div>
                  <div className="cert-date">
                    <FaCalendarAlt className="date-icon" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="cert-description">{cert.description}</p>
                <div className="cert-details">
                  <div className="cert-id">
                    <FaCheckCircle className="id-icon" />
                    <span>Credential ID: <strong>{cert.credentialId}</strong></span>
                  </div>
                  <div className="cert-validity">
                    <MdSecurity style={{ color: '#10b981' }} />
                    <span>Valid until: <strong>{cert.validUntil}</strong></span>
                  </div>
                </div>
                <div className="skills-container">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      <FaStar style={{ fontSize: '12px', marginRight: '4px' }} />
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="cert-actions">
                  <a href={cert.verificationLink} className="verify-btn" target="_blank" rel="noopener noreferrer">
                    <FaLink /> Verify Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
