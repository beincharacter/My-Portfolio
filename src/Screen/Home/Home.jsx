import React from 'react';
import Card from '../../Componant/Card/Card';
import Corousel from '../../Componant/Corousel/Corousel';
import Header from '../../Componant/Header/Header';
import './home.css'

const Home = () => {
  return (
    <div>
      <Header />
      <section className="intro-carousel">
        <Corousel />
      </section>

      <section className="projects">
        <Card />
      </section>

    </div>
  )
}

export default Home;