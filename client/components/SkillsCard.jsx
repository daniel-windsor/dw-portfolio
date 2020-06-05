import React from 'react'

const SkillsCard = props => (
    <ul className='box_skill'>
      <h2 style={{ margin: 20 + 'px', textAlign: 'center' }}>{props.name}</h2>
      {
        props.technologies.map(tech => (
          <li className='skill_bubble' key={tech}>{tech}</li>
        ))
      }
    </ul>
)

export default SkillsCard