import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectView from './ProjectView'

import { projects } from '../../project'

class ProjectContainer extends React.Component {

  state = {
    activeProject: 0
  }

  handleClick = e => {
    this.setState({
      activeProject: e
    })
  }

  render() {
    return (
      <div id='projects' className='container'>
        <div className='container_header'>
          <h1>Projects</h1>
        </div>
        
        <div className='container_row'>
          <div className='container_half grid'>
            {
              projects.map(project => (
                <ProjectCard key={project.id} {...project} onClick={this.handleClick} />
              ))
            }
          </div>
          <div className='container_half'>
            <ProjectView activeProject={this.state.activeProject} />
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectContainer