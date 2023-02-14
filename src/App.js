import React from 'react'
import Home from './Screen/Home/Home';
import About from './Screen/About/About';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Projects from './Screen/Projects/Projects';
import Project from './Screen/Project/Project';
import Games from './Screen/Games/Games';
import Utilities from './Screen/Utilities/Utilities';
import Header from './Componant/Header/Header';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project' element={<Project />} />
          <Route path='/games' element={<Games />} />
          <Route path='/utilities' element={<Utilities />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;