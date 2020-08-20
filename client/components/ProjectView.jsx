import React from 'react'

import { projects } from '../../project'

class ProjectView extends React.Component {
  render() {
    const project = projects.find(pro => pro.id === this.props.activeProject)
    return (
      <div className='project-display'>
        <h2 style={{ textAlign: 'center' }}>{project.title}</h2>

        <p style={{marginRight: 20 + 'px', marginLeft: 20 + 'px'}}>{project.description}</p>

        {this.props.image &&
          <img className='project-img' src={this.props.image.src} />
        }

        <span className='link_bar'>
          <a className='box_contact' style={{ textAlign: 'center', display: 'block' }} href={project.github} target='_blank'>GitHub</a>
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