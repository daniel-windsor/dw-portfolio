import React from 'react'

import SkillsCard from './SkillsCard'

import { skills } from '../../skills'


class SkillsContainer extends React.Component {
  render() {
    return (
      <div id='skills' className='container'>
        <h1>Skills</h1>
        {
          skills.map((skill, i) => {
            return <SkillsCard key={i} {...skill} />
          })
        }
      </div>
    )
  }
}

export default SkillsContainer