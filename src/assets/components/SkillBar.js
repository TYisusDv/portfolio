import React from 'react';

const SkillBar = ({ skill, percentage, color }) => {
  return (
    <div className='skill-bar'>
      <div className='text'>
        <h3>{skill}</h3> <span className='per'>{percentage}%</span>
      </div>
      <div className="bar" style={{ width: `${percentage}%`, backgroundColor: color}}></div>
    </div>
  );
};

export default SkillBar;