import React from 'react';
import Project_Card from '../../Componant/Card/Project_Card/Card';
import Header from '../../Componant/Header/Header';

const Projects = () => {
  return (
    <div>
    <Header />
    <section className="projects">
      <Project_Card />
    </section>
    </div>
  )
}

export default Projects