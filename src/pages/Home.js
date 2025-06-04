import React from 'react';
import '../styles/Home.css';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      imageUrl: 'https://miro.medium.com/v2/resize:fit:1340/0*EVTnmRoDHotaLydW',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A weather application that displays current weather and forecasts using API data.',
      technologies: ['React', 'OpenWeather API', 'CSS'],
      imageUrl: 'https://www.igeeksblog.com/wp-content/uploads/2022/10/How-to-use-weather-app-on-iPhone-and-iPad.jpg',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'A productivity app with drag-and-drop functionality for organizing daily tasks.',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&auto=format&fit=crop',
      liveUrl: '#',
      codeUrl: '#'
    },
    {
      id: 4,
      title: 'Recipe Finder',
      description: 'Search thousands of recipes with filtering by ingredients and dietary needs.',
      technologies: ['React', 'Edamam API', 'Tailwind CSS', 'Context API'],
      imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop',
      liveUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to My Portfolio</h1>
        <p>I build amazing web applications with modern technologies</p>
      </section>
      
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
      );
    };
    
    export default Home;