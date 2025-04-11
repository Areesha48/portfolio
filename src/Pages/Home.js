import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';
import '../styles/Home.css';

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`home-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="content-wrapper">
        {/* Left Section */}
        <motion.div 
          className="text-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi there 👋, I'm
          </motion.span>
          
          <motion.h1
            className="name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Areesha
          </motion.h1>

          <motion.div 
            className="title-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="title">Frontend Developer</h2>
            <div className="animated-text">
              <span>React.js Expert</span>
              {/* <span>UI/UX Enthusiast</span> */}
              <span>Creative Coder</span>
            </div>
          </motion.div>

          <motion.p 
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            I craft beautiful, responsive, and user-friendly web experiences
            using modern technologies and best practices.
          </motion.p>

          <motion.div 
            className="cta-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="/projects" className="primary-btn">View My Work</a>
            <a href="/contact" className="secondary-btn">Get in Touch</a>
          </motion.div>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a href="https://github.com/Areesha48" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/areesha-shehzad-5a5210313" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/code.craftwithme" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          className="image-section"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
            <img src="/homeimg.jpeg" alt="Areesha" className="profile-image" />
            <div className="tech-stack">
              <img src="/images/image1.png" alt="React" className="tech-icon" />
              <img src="/images/image2.jpg" alt="JavaScript" className="tech-icon" />
              <img src="/images/image3.svg" alt="TypeScript" className="tech-icon" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
