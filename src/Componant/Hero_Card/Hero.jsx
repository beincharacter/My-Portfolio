import React, { useState, useEffect } from 'react';
import './Hero.scss';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMedium } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Skills_Card from '../Card/Skill_Card/Skills';

const HeroCard = () => {
  const socialLinks = [
    { icon: <FaGithub size={30} />, url: 'https://github.com/beincharacter', title: 'GitHub' },
    { icon: <FaLinkedin size={30} />, url: 'https://www.linkedin.com/in/pal-shubham', title: 'LinkedIn' },
    { icon: <FaTwitter size={30} />, url: 'https://twitter.com/beincharacter', title: 'Twitter' },
    { icon: <FaMedium size={30} />, url: 'https://www.instagram.com/beincharacter/', title: 'Instagram' },
    { icon: <SiGmail size={30} />, url: 'mailto:shubhampalatwork@gmail.com', title: 'Gmail' }
  ];

  const skills = ['Web Developer', 'Designer', 'Problem Solver', 'Thinker'];
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 3000);
    
    setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <div className={`hero_container ${animationStarted ? 'animate' : ''}`}>
      <div className="about_box">
        <div className="hero_card">
          <h1>Hello 👋</h1>
          <h2>I'm Shubham Pal</h2>
          <h3>A passionate {skills[currentSkillIndex]}</h3>
          <h3>Based in Punjab, India</h3>
          <div className="icons">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" title={link.title}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>


      <div className="skills_box">
        <Skills_Card />
      </div>
    </div>
  );
};

export default HeroCard;
