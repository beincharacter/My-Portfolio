import React from 'react';
import Project_Card from '../../Componant/Card/Project_Card/Card';
import Corousel from '../../Componant/Corousel/Corousel';
import Header from '../../Componant/Header/Header';
import Skills_Card from '../../Componant/Card/Skill_Card/Skills';
import './home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <section className="intro-carousel">
        <Corousel />
      </section>

      <section className="projects">
        <p>Projects :</p>
        <Project_Card />
      </section>

      <section className='skills'>
        <Skills_Card />
      </section>

    </div>
  )
}

export default Home;