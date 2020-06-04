import React from 'react'

import { projects } from '../../project'

class ProjectView extends React.Component {
  render() {
    const project = projects.find(pro => pro.id === this.props.activeProject)
    return (
      <div className='project-display'>
        <h1 style={{textAlign: 'center'}}>{project.title}</h1>
        <p>{project.description}</p>

        <div className='image-container'>
          {this.props.image &&
            <img className='project-img' src={this.props.image.src} />
          }
        </div>

        <span className='link_bar'>
          <a className='box_contact' style={{textAlign: 'center', display: 'block' }} href={project.github} target='_blank'>GitHub</a>
          {
            project.project &&
            <a className='box_contact' style={{ textAlign: 'center', display: 'block' }} href={project.project} target='_blank' target='_blank'>Website</a>
          }
        </span>
      </div>
    )
  }
}

export default ProjectView