import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pro from '../../../Assets/Project.json';
import './_Card.scss';


const Project_Card = () => {
    const navigate = useNavigate();
    const projects = pro.projects;

  return (

    <>
    <p>PROJECTS</p>
    <span className='cards-container'>
        
        {projects.map((project, i) => {
            return (
            <> 
                <div className="card-box"
                    key={`card_box${i}`} >
                        
                    <span className='card' 
                        key={`card${i}`}
                        style={{
                        backgroundImage: `url(${project.background})`,
                        backgroundSize: 'cover',
                        backgroundPositionX: 'center',
                    }}>

                    <span className="card_details">
                        <div className="tech-name">Project Name: {project.name}</div>
                        <div className="tech-stack">Technologies Used: {project.tech}</div>
                        <div className="tech-type">Type: {project.type}</div>
                        <div className="tech-host">Hosted At: 
                        <a style={{color: 'white', marginLeft: '5px'}} href={project.hosted_link} target='_blank' >Click here</a></div>
                        <button onClick={() => navigate('/project')}>Know more</button>
                    </span>
                    </span> 

                </div>

            </>
            )
        })}
    </span>
    </>
  )
}

export default Project_Card;