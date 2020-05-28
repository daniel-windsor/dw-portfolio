import React from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
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
    const active = this.state.activeProject
    return (
      <div id='projects' className='container'>
        <div className='container_header'>
          <h1>Projects</h1>
        </div>

        <SwitchTransition mode={'in-out'}>
          <CSSTransition
            key={this.state.activeProject}
            addEndListener={(node, done) => { node.addEventListener("transitionend", done, false) }}
            classNames="slide">

            <div
              className='project-background'
              style={{
                backgroundImage: `url('img/noise.png'), linear-gradient(to bottom right, ${projects[active].gradient[0]}, ${projects[active].gradient[1]})`
              }}>
            </div>

          </CSSTransition>
        </SwitchTransition>

        <div className='container_row'>

          <div className='container_grid'>
            {
              projects.map(project => (
                <ProjectCard key={project.id} {...project} onClick={this.handleClick} />
              ))
            }
          </div>

          <div className='container_column'>

            <SwitchTransition mode={'out-in'}>
              <CSSTransition
                key={this.state.activeProject}
                addEndListener={(node, done) => { node.addEventListener("transitionend", done, false) }}
                classNames="slide">

                <ProjectView activeProject={this.state.activeProject} />

              </CSSTransition>
            </SwitchTransition>

          </div>
        </div>
      </div >
    )
  }
}

export default ProjectContainer