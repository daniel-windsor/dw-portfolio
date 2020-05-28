import React from 'react'

const SkillsCard = props => (
  <div className='box_skill'>
    <h1 style={{margin: 20 + 'px'}}>{props.name}</h1>
    {
      props.technologies.map(tech => (
        <div className='skill_bubble' key={tech}>{tech}</div>
      ))
    }
  </div>
)

export default SkillsCard