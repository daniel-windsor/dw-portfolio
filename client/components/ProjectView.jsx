import React from 'react'

import { projects } from '../../project'

class ProjectView extends React.Component {
  render() {
    const project = projects.find(pro => pro.id === this.props.activeProject)
    return (
      <div className='project-display'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>

        <div className='image-container'>
          <img className='project-img' src={project.image} />
        </div>
        
        <span className='link_bar'>
          <a href={project.github} target='_blank'>GitHub</a>
          <a href={project.project} target='_blank' target='_blank'>Link</a>
        </span>
      </div>
    )
  }
}

export default ProjectView