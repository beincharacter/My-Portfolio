import React from 'react';
import Project_Card from '../../Componant/Card/Project_Card/Card';
import Header from '../../Componant/Header/Header';
import './projects.scss';

const Projects = () => {
  return (
    <div>
    <Header />
    <section className="projects-i">
      <Project_Card />
    </section>
    </div>
  )
}

export default Projects