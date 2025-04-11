import React from "react";
import "../styles/project.css"; // Import the CSS file here

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          View Live
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;