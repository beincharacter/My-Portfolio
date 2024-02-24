import React from 'react';
import './Skills.scss';
import { Icon } from '../../Icon';

const skills = [
  { name: 'HTML', url: 'https://example.com/html', iconName: 'html' },
  { name: 'CSS', url: 'https://example.com/css', iconName: 'css' },
  { name: 'CSS', url: 'https://example.com/css', iconName: 'sass' },
  { name: 'JavaScript', url: 'https://example.com/javascript', iconName: 'javascript' },
  { name: 'React.js', url: 'https://example.com/reactjs', iconName: 'reactjs' },
  { name: 'Redux', url: 'https://example.com/redux', iconName: 'redux' },
  { name: 'Node.js', url: 'https://example.com/nodejs', iconName: 'nodejs' },
  { name: 'MongoDB', url: 'https://example.com/mongodb', iconName: 'mongodb' },
  { name: 'Git', url: 'https://example.com/git', iconName: 'git' },
  { name: 'TypeScript', url: 'https://example.com/typescript', iconName: 'typescript' }
];

const SkillsCard = () => {
  const totalSkills = skills.length;
  const columns = totalSkills === 0 ? 1 : Math.ceil(Math.sqrt(totalSkills));
  const rows = Math.ceil(totalSkills / columns);

  return (
    <div className='skills-container'>
      {[...Array(rows)].map((_, rowIndex) => (
        <div className="skills-row" key={rowIndex}>
          {[...Array(columns)].map((_, colIndex) => {
            const skillIndex = rowIndex * columns + colIndex;
            if (skillIndex < totalSkills) {
              const skill = skills[skillIndex];
              return (
                <div className="skill-card" key={skillIndex}>
                  {/* <a href={skill.url} target="_blank" rel="noopener noreferrer"> */}
                    <Icon iconName={skill.iconName} />
                  {/* </a> */}
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default SkillsCard;
