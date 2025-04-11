import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaGithub, FaFigma, FaSass } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRedux, SiTailwindcss, SiNextdotjs, SiFramer } from 'react-icons/si';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import '../styles/About.css';

const About = () => {
  const { isDarkMode } = useTheme();

  const skills = [
    { name: 'React.js', icon: <FaReact />, level: 90 },
    { name: 'Next.js', icon: <SiNextdotjs />, level: 85 },
    { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 95 },
    { name: 'Redux', icon: <SiRedux />, level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
    { name: 'SASS', icon: <FaSass />, level: 85 },
    { name: 'Framer Motion', icon: <SiFramer />, level: 80 },
    { name: 'Figma', icon: <FaFigma />, level: 75 },
    { name: 'Git/GitHub', icon: <FaGithub />, level: 85 },
  ];

  return (
    <div className={`about-page ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Frontend Developer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Crafting beautiful and responsive user interfaces with modern technologies
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate Frontend Developer specializing in creating engaging and responsive web applications. 
            With a keen eye for design and a love for clean code, I transform creative ideas into seamless user experiences.
          </p>
          <p>
            My expertise lies in modern frontend technologies like React.js, Next.js, and TypeScript. I have a strong 
            foundation in UI/UX principles and stay current with the latest web development trends and best practices.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-content">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3>{skill.name}</h3>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      {/* <section className="experience-section">
        <div className="section-content">
          <h2>Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2022 - Present</div>
              <div className="timeline-content">
                <h3>Frontend Developer</h3>
                <p>Creative Web Solutions</p>
                <ul>
                  <li>Developed responsive and interactive web applications using React.js and Next.js</li>
                  <li>Implemented modern UI designs with Tailwind CSS and Framer Motion</li>
                  <li>Optimized application performance and accessibility</li>
                  <li>Collaborated with designers to ensure pixel-perfect implementations</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2021 - 2022</div>
              <div className="timeline-content">
                <h3>Junior Frontend Developer</h3>
                <p>Digital Agency XYZ</p>
                <ul>
                  <li>Built responsive websites using HTML5, CSS3, and JavaScript</li>
                  <li>Created interactive UI components with React.js</li>
                  <li>Worked with design teams to implement modern UI/UX designs</li>
                  <li>Participated in code reviews and team discussions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Projects CTA */}
      <section className="cta-section">
        <div className="section-content">
          <h2>View My Work</h2>
          <p>Check out my latest frontend projects and UI implementations</p>
          <div className="cta-buttons">
            <a href="/projects" className="cta-button">View Projects</a>
            <a href="/contact" className="cta-button secondary">Contact Me</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


