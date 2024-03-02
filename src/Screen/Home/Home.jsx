import React from 'react';
import './home.scss';
import Project_Card from '../../Componant/Card/Project_Card/Card';
import HeroCard from '../../Componant/Hero_Card/Hero';
import { ContactForm } from '../../Componant/Contact/Contact';

const Home = () => {
  return (
    <>
      <div className='home_container'>
        <HeroCard />
        {/* <CarouselContainer /> */}
        <div className="home_container_projects">
          <Project_Card />
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>



    </>
  )
}

export default Home;