import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaHtml5, FaCss3Alt, FaSass, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import './SkillCard.scss';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, description: 'HyperText Markup Language' },
    { name: 'CSS3', icon: <FaCss3Alt />, description: 'Cascading Style Sheets' },
    { name: 'SCSS', icon: <FaSass />, description: 'Sass (Syntactically Awesome Style Sheets)' },
    { name: 'JavaScript', icon: <FaJsSquare />, description: 'A high-level programming language' },
    { name: 'React', icon: <FaReact />, description: 'A JavaScript library for building user interfaces' },
    { name: 'Node.js', icon: <FaNodeJs />, description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
    { name: 'MongoDB', icon: <FaDatabase />, description: 'A cross-platform document-oriented database program' },
    { name: 'Git', icon: <FaGitAlt />, description: 'A free and open source distributed version control system' }
  ];

  return (
      <div className='card-container'>
        {skills.map((skill, i) => (
          <div className='skill-box'  key={i}>
            <div className="skill-card" title={skill.description}>
              <div className="skill-card__icon">
                {skill.icon}
              </div>
              <div className="skill-card__name">
                <h3>{skill.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}

export default ControlledCarousel;
