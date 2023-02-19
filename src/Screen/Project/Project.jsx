import React from 'react';
import "./project.scss";
import { useLocation, useNavigate } from 'react-router-dom';

const Project = () => {
  const navigate = useNavigate();
  const { state:
    { Project_details } } = useLocation();
    console.log(Project_details, " in project")

    if(Project_details === undefined){ 
      return navigate('/');
    }

  const {
    title, image, technology_used, description, features, usage, link
  } = Project_details;


  return (
    <>
      <div className="project-details">
        <h3 className='title'>{title}</h3>

        <div className="box">
          <div> <img src={image.image1} alt="project_photo" /> </div>
          <div>
            <span>
              <span className='bold'>Description :</span>
              <span>{description}</span>
            </span></div>
          <div>
            <span>
              <h2 className='bold'>Technology Used :</h2>
              <ul>
                {technology_used.map(tech => <li key={tech}>• {tech}</li>)}
              </ul>
            </span>
          </div>
          <div> <img src={image.image2} alt="project_photo" height="90%" width="85%" /> </div>
        </div>

        <div className="featues">
          <span>
            <h2 className='bold'>Features :</h2>
            <ul>
              {features.map(feature => <li key={feature}>• {feature}</li>)}
            </ul>
          </span>
        </div>

        <div className="featues">
          <span>
          <h2 className='bold'>Usage:</h2>
          <p>{usage}</p>
          </span>
        </div>

        <div className="link">
          <h2 className='bold'>Hoisted at:</h2><a href={link} target="_blank">{link}</a>
        </div>

        
        
      </div>
    </>
  )
}

export default Project