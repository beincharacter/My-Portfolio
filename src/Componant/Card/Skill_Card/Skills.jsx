import React from 'react';
import './Skills.scss';

let skills = [
  {
    name: 'HTML5',
  },
  {
    name: 'CSS',
  },
  {
    name: 'JAVASCRIPT',
  },
  {
    name: 'REACT',
  },
  {
    name: 'NODEJS',
  },
]

const Skills_Card = () => {
  return (
    <div className='skills_container'>
      <table >
        <thead>
          <tr>
            <th >FrontEnd</th>
            <th >Backend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td ><a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a></td>
            <td><a href="https://www.mysql.com/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg" alt="MySQL" height="50" /></a></td>
          </tr>
          <tr>
            <td><a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a></td>
            <td><a href="https://nodejs.org/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a></td>
          </tr>
          <tr>
            <td><a href="https://www.javascript.com/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a></td>
            <td><a href="https://www.javascript.com/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a></td>
          </tr>
          <tr>
            <td><a href="https://www.w3schools.com/css/" target="_blank"><img src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a></td>
            <td><a href="https://www.mongodb.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="JavaScript" height="50" /></a></td>
          </tr>
          <tr>
            <td><a href="https://www.w3schools.com/css/" target="_blank"><img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" alt="react" height="50" /></a></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Skills_Card;