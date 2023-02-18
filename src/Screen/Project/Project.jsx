import React from 'react';
import "./project.scss";
import { useLocation } from 'react-router-dom';

const Project = () => {
  const { state } = useLocation();
  
  return (
    <div className="card-box"
                    key={`card_box`} >
                        
                    <span className='card' 
                        key={`card`}
                        style={{
                        backgroundImage: `url(${state.images.background})`,
                        backgroundSize: 'cover',
                        backgroundPositionX: 'center',
                    }}>

                    <span className="card_details">
                        <div className="tech-name">Peoject Name: {state.name}</div>
                        <div className="tech-stack">Technologies Used: {state.tech}</div>
                        <div className="tech-type">Type: {state.type}</div>
                        <div className="tech-host">Hosted At: 
                        <a style={{color: 'white', marginLeft: '5px'}} href={state.hosted_link} target='_blank' >Click here</a></div>
                        
                    </span>
                    </span> 

                </div>
  )
}

export default Project