import React from 'react';
import './Hero.scss';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import{ SiGmail } from 'react-icons/si';

const HeroCard = () => {
  return (
    <>
    <div className="hero_box">
      <div className="hero_card">
        <h1>Hello 👋</h1>
        <h2>I'm Shubham Pal -</h2>
        <h3>curios web developer </h3>
        <h3>based in Punjab, IN </h3>
      </div>
      <div className="icons">
            <a href="https://github.com/beincharacter" target="_blank"><FaGithub size={30} /></a>
            <a href="https://www.linkedin.com/in/pal-shubham" target="_blank"><FaLinkedin size={30} /></a>
            <a href="https://twitter.com/beincharacter" target="_blank"><FaTwitter size={30} /></a>
            <a href="#" target="_blank"><FaInstagram size={30} /></a>
            <a href="mailto:shubhampalatwork@gmail.com" target="_blank"><SiGmail size={30} /></a>
      </div>
      </div>
    </>
  );
};

export default HeroCard;
