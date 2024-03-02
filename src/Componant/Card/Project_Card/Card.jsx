import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../../Assets/Project.json';
import './ProjectCard.scss';
import ScrollReveal from 'scrollreveal';

const ProjectCard = ({ project }) => {
    const navigate = useNavigate();

    const handleLiveDemoClick = (projectLink) => {
        window.open(projectLink, '_blank');
    };

    const handleGithubClick = (githubLink) => {
        window.open(githubLink, '_blank');
    };
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
          delay:  200,
          duration: 500,
          distance: '400px',
          origin: 'bottom',
        //   reset: true,
          easing: 'linear',
        //   interval: 600,
        //   scale: 0.85
        }, []);
    });
    

    return (
        <div className="project-card reveal">
            <div className="view-box">
                <img src={project.images.background} alt={project.name} />
            </div>
            <div className="details-box">
                <h3>{project.name}</h3>
                <p>Tech : {project.tech}</p>
                <p>Type : {project.type}</p>
                <div className="btns">
                    <button onClick={() => handleLiveDemoClick(project.hosted_link)}>Live Demo</button>
                    <button onClick={() => handleGithubClick(project.github['front-end'])}>Github</button>
                </div>
            </div>
        </div>
    );
};

const ProjectCardContainer = () => {
    const projects = projectsData.projects;

    return (
        <>
            <p>PROJECTS</p>
            <div className="project-card-container">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </>
    );
};

export default React.memo(ProjectCardContainer);
