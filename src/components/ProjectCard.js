import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.liveUrl} className="live-demo">Live Demo</a>
          <a href={project.codeUrl} className="view-code">View Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;