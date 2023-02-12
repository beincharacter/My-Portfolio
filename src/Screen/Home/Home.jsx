import React from 'react';
import Project_Card from '../../Componant/Card/Project_Card/Card';
import Corousel from '../../Componant/Corousel/Corousel';
import Header from '../../Componant/Header/Header';
import Skills_Card from '../../Componant/Card/Skill_Card/Skills';
import './home.scss'
import About from '../../Componant/About/about';
import Details from '../../Componant/About/details';

const Home = () => {
  return (
    <>
      <span><Header /></span>
    <div className='home_container'>
      
      <span>
      <section className='skills'>
        <Skills_Card />
        <Details />
        <About />
      </section>
      <section className="projects">
        <p>Projects :</p>
        <Project_Card />
      </section>

      </span>
    </div>
    
    

    </>
  )
}

export default Home;