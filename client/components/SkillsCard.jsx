import React from 'react'

const SkillsCard = props => (
  <div className='box_skill'>
    <h1>{props.name}</h1>
      <ul>
        {
          props.technologies.map(tech => (
            <li key={tech}>{tech}</li>
          ))
        }
      </ul>
    <p>{props.description}</p>
  </div>
)

export default SkillsCard