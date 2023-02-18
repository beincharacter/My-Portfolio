import React from 'react';
import './home.scss';
import Project_Card from '../../Componant/Card/Project_Card/Card';
import CarouselContainer from '../../Componant/Corousel/Corousel'
import Header from '../../Componant/Header/Header';
import Skills_Card from '../../Componant/Card/Skill_Card/Skills';
import About from '../../Componant/About/about';
import Details from '../../Componant/About/details';
import HeroCard from '../../Componant/Hero_Card/Hero';

const Home = () => {
  return (
    <>
    <div className='home_container'>
        {/* <HeroCard /> */}
        <CarouselContainer />
        <div className="home_container_projects">
        <Project_Card />
        </div>
    </div>
    
    

    </>
  )
}

export default Home;