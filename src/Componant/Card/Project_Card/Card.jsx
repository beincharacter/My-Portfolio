import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import projectsData from '../../../Assets/Project.json';
import './ProjectCard.scss';
import ScrollReveal from 'scrollreveal';

const ProjectCard = ({ project, isVisible }) => {
    const navigate = useNavigate();

    const handleLiveDemoClick = (projectLink) => {
        window.open(projectLink, '_blank');
    };

    const handleGithubClick = (githubLink) => {
        window.open(githubLink, '_blank');
    };
    useEffect(() => {
        ScrollReveal().reveal('.reveal', {
          delay:  500,
          distance: '200px',
          origin: 'bottom'
        });
      }, []);
    

    return (
        <div className="project-card">
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
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <>
            <p>PROJECTS</p>
            <div className="project-card-container reveal">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} isVisible={isVisible} />
                ))}
            </div>
        </>
    );
};

export default React.memo(ProjectCardContainer);
