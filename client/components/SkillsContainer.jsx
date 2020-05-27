import React from 'react'

import SkillsCard from './SkillsCard'

import { skills } from '../../skills'


class SkillsContainer extends React.Component {
  render() {
    return (
      <div id='skills' className='container'>
        <div className='container_header'>
          <h1>Skills</h1>
        </div>
        <span className='container_row'>
          {
            skills.map((skill, i) => {
              return <SkillsCard key={i} {...skill} />
            })
          }
        </span>
      </div>
    )
  }
}

export default SkillsContainer