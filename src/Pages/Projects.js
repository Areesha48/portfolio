import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import '../styles/Projects.css';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [filter, setFilter] = useState('all');

  const projects = [
    // {
    //   id: 1,
    //   title: "E-Commerce Dashboard",
    //   description: "A responsive admin dashboard with dark mode, analytics charts, and real-time data updates.",
    //   image: "/images/project1.jpg", // Add your project image
    //   technologies: ["React", "Redux", "Tailwind CSS", "Chart.js"],
    //   category: "frontend",
    //   githubLink: "https://github.com/yourusername/project1",
    //   liveLink: "https://project1.demo.com",
    //   features: [
    //     "Responsive design for all devices",
    //     "Dark/Light theme support",
    //     "Real-time data visualization",
    //     "Advanced filtering and sorting"
    //   ]
    // },
    {
      "id": 2,
      "title": "Text To Image Generator App",
      "description": "A React and TypeScript-based web application that uses Huggingface's AI models to generate unique images from text descriptions, featuring a sleek UI built with Motion for animations.",
      "image": "/images/project2.png",
      "technologies": ["React.js", "TypeScript", "Huggingface", "Motion"],
      "category": "frontend",
      "githubLink": "https://github.com/Areesha48/texttoimage-app",
      "liveLink": "https://texttoimage-app.vercel.app/",
      "features": [
        "Generate high-quality images from text prompts using Huggingface AI models.",
        "Responsive and modern UI with smooth animations powered by Motion.",
        "User-friendly interface for seamless text input and image generation.",
        "Download and share generated images effortlessly."
      ]
    },
    {
      "id": 3,
      "title": "Task Manager App",
      "description": "A React and TypeScript-based task management app that allows users to efficiently add, edit, delete, and organize tasks with a clean and responsive UI.",
      "image": "/images/project3.png",
      "technologies": ["React.js", "TypeScript", "Material-UI", "Context API"],
      "category": "frontend",
      "githubLink": "https://github.com/Areesha48/taskmanager-App/tree/main",
      "liveLink": "https://taskmanager-app-dusky.vercel.app/",
      "features": [
        "Create, edit, and delete tasks with an intuitive UI.",
        "Mark tasks as completed and filter them based on status.",
        "Dark mode support for a better user experience.",
        "Responsive design with Material-UI for a smooth look and feel.",
        "Stores tasks locally for persistence across sessions."
      ]
    },
    {
      "id": 4,
      "title": "Weather App",
      "description": "A React and TypeScript-based weather application that allows users to search for cities and view real-time weather details with a clean and responsive UI.",
      "image": "/images/project4.png",
      "technologies": ["React.js", "TypeScript", "Material-UI", "Tailwind CSS", "shadcn-ui"],
      "category": "frontend",
      "githubLink": "https://github.com/Areesha48/pakistan-weather-app/tree/main",
      "liveLink": "pakistan-weather-app.vercel.app",
      "features": [
        "Search weather by city name.",
        "Display current temperature, humidity, and weather conditions.",
        "Beautiful UI with dynamic background based on weather.",
        "Real-time API fetching from OpenWeatherMap.",
        "Fully responsive design with Material-UI and Tailwind CSS."
      ]
    },
    {
      "id": 5,
      "title": "Frontend Developer Quiz App",
      "description": "A quiz app designed for frontend developers to test their knowledge in HTML, CSS, JavaScript, and React.js.",
      "image": "/images/project5.png",
      "technologies": ["React.js", "TypeScript", "Tailwind CSS"],
      "category": "frontend",
      "githubLink": "https://github.com/Areesha48/QUIZ-APP",
      "liveLink": "https://devquiz-app.vercel.app/",
      "features": [
        "Quizzes on HTML, CSS, JavaScript, and React.js.",
        "Multiple-choice questions with real-time scoring.",
        "Timer-based challenges to enhance problem-solving speed.",
        "Progress tracking to monitor improvement over time.",
        "Responsive and user-friendly UI with Tailwind CSS.",
        "Dynamic question generation for a unique experience every time."
      ]
    }
    
    
    
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className={`projects-page ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Hero Section */}
      <motion.section 
        className="projects-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>My Projects</h1>
        <p>Showcasing my frontend development journey through code</p>
      </motion.section>

      {/* Filter Buttons */}
      <div className="filter-container">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
          onClick={() => setFilter('frontend')}
        >
          Frontend
        </button>
        {/* //<button 
          className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setFilter('fullstack')}
        >
          Full Stack
        </button>// */}
      </div>

      {/* Projects Grid */}
      <motion.div 
        className="projects-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-features">
                {project.features.map((feature, i) => (
                  <span key={i} className="feature-item">• {feature}</span>
                ))}
              </div>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

