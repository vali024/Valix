import React, { useState } from 'react';
import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb, FaUsers, FaRocket, FaCertificate, FaAward, FaHandshake, FaCheckCircle, FaTimes, FaHeart } from 'react-icons/fa';
import { MdSecurity, MdSupport, MdOutlineVolunteerActivism } from 'react-icons/md';
import { RiAwardLine } from "react-icons/ri";
import qrcode from '../../assets/QrCodeR.png';

const About = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: <FaLightbulb className="value-icon" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge solutions and creative approaches to digital challenges."
    },
    {
      icon: <FaUsers className="value-icon" />,
      title: "Collaboration",
      description: "Working closely with clients to ensure their vision becomes reality through effective partnership."
    },
    {
      icon: <MdSecurity className="value-icon" />,
      title: "Security",
      description: "Implementing robust security measures to protect your digital assets and data."
    },
    {
      icon: <FaRocket className="value-icon" />,
      title: "Performance",
      description: "Delivering high-performance solutions that scale with your business needs."
    }
  ];

  const team = [
    {
      name: 'Alex Chen',
      role: 'CEO & Tech Lead',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Tech visionary with 10+ years in digital transformation'
    },
    {
      name: 'Sarah Johnson',
      role: 'Creative Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Award-winning designer leading innovative digital solutions'
    },
    {
      name: 'David Miller',
      role: 'Development Lead',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Full-stack expert specializing in scalable applications'
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Valix was established with a vision to transform digital experiences"
    },
    {
      year: "2021",
      title: "First Major Project",
      description: "Successfully delivered our first enterprise-scale digital transformation project"
    },
    {
      year: "2022",
      title: "Team Expansion",
      description: "Grew our team of experts and expanded our service offerings"
    },
    {
      year: "2023",
      title: "Global Recognition",
      description: "Received multiple awards for technical innovation and client satisfaction"
    },
    {
      year: "2024",
      title: "Community Support",
      description: "Launched initiatives to support homeless and elderly through technology"
    },
    {
      year: "2025",
      title: "Market Leader",
      description: "Established as a leading digital services provider with global presence"
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences"
    },
    {
      year: "2021",
      title: "Rapid Growth",
      description: "Expanded our team and service offerings"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Started serving clients internationally"
    },
    {
      year: "2023",
      title: "Innovation Awards",
      description: "Recognized for technological excellence"
    },
    {
      year: "2024",
      title: "Industry Leader",
      description: "Established as a trusted industry leader"
    }
  ];

  const donations = [
    {
      title: "Support Homeless Shelters",
      description: "Help us provide shelter, food, and basic necessities to homeless individuals.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop&q=80",
      qrCode: qrcode
    },
    {
      title: "Old Age Home Care",
      description: "Support elderly care facilities with medical supplies and daily essentials.",
      image: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1200&auto=format&fit=crop&q=80",
      qrCode: qrcode
    }
  ];

  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="about-heroa">
        <motion.div 
          className="heroa-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1>About <span className="gradient-text">ValiX</span></h1>
          <p>Transforming ideas into exceptional digital experiences</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="stat-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="story-section">
        <div className="section-container">
          <motion.div 
            className="story-content"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="story-text">
              <h2>Our Story</h2>
              <div className="story-paragraphs">
                <p>
                  Valix was founded with a vision to revolutionize digital experiences through innovative 
                  technology solutions. We combine creativity with technical expertise to deliver 
                  exceptional results.
                </p>
                <p>
                  Since our inception, we've been at the forefront of digital transformation, helping 
                  businesses leverage cutting-edge technologies to stay ahead in the digital age. Our 
                  commitment to excellence and innovation has made us a trusted partner for businesses 
                  worldwide.
                </p>
                <p>
                  Today, we're proud to be a leading digital services provider, known for our 
                  innovative solutions, technical expertise, and client-focused approach. Our work 
                  doesn't just meet expectations; it exceeds them.
                </p>
              </div>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&auto=format&fit=crop&q=80"
                alt="Our Story"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-section">
        <div className="section-container">
          <div className="mission-grid">
            <motion.div 
              className="mission-card"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="mission-header">
                <div className="mission-icon">
                  <FaRocket />
                </div>
                <h3>Our Mission</h3>
              </div>
              <p>
                To empower businesses through innovative digital solutions that drive growth, 
                efficiency, and competitive advantage. We're committed to delivering excellence 
                in every project while fostering long-term client relationships.
              </p>
            </motion.div>

            <motion.div 
              className="vision-card"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="vision-header">
                <div className="vision-icon">
                  <FaLightbulb />
                </div>
                <h3>Our Vision</h3>
              </div>
              <p>
                To be the global leader in digital transformation, recognized for our innovative 
                solutions, technical excellence, and commitment to client success. We aim to shape 
                the future of digital technology while maintaining the highest standards of quality 
                and security.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values-section">
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p>The principles that guide everything we do</p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className={`value-card value-${value.color}`}>
              <div className="value-icon-wrapper">
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="getInn-timeline-section">
        <div className="getInn-section-header">
          <h2>Our Journey</h2>
          <p>Key milestones in our growth story</p>
        </div>

        <div className="getInn-timeline">
          <div className="getInn-timeline-line"></div>
          <div className="getInn-timeline-events">
            {milestones.map((milestone, index) => (
              <div key={index} className={`getInn-timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="getInn-event-content">
                  <div className="getInn-event-year">{milestone.year}</div>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
                <div className="getInn-event-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <motion.div 
            className="section-header"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2>Meet Our Team</h2>
            <p>The innovative minds behind Valix</p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={index} 
                className="team-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="member-overlay"></div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <div className="member-role">{member.role}</div>
                  <p>{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donations" className="donation-section">
        <div className="section-container">
          <motion.div 
            className="donation-header"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2>Make a Difference</h2>
            <p>Join us in supporting those in need through our community initiatives</p>
          </motion.div>

          <div className="donation-cards">
            {donations.map((donation, index) => (
              <motion.div 
                key={index}
                className="donation-card"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <div className="donation-image">
                  <img src={donation.image} alt={donation.title} />
                  <div className="donation-overlay">
                    <motion.button 
                      className="donate-button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowQRCode(donation.qrCode)}
                    >
                      <FaHeart className="donate-icon" />
                      Donate Now
                    </motion.button>
                  </div>
                </div>
                <div className="donation-content">
                  <h3>{donation.title}</h3>
                  <p>{donation.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QR Code Modal */}
      <AnimatePresence>
        {showQRCode && (
          <motion.div 
            className="qr-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="qr-modal"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <button className="close-modal" onClick={() => setShowQRCode(false)}>
                <FaTimes />
              </button>
              <h3>Scan to Donate</h3>
              <div className="qr-code">
                <img src={showQRCode} alt="QR Code for donation" />
              </div>
              <p>Thank you for your generosity!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

        
    </motion.div>
  );
};

export default About;
