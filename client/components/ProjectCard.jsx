import React from 'react'

class ProjectCard extends React.Component {
  render() {
    return (
      
      <div 
        className='box_project' onClick={() => this.props.onClick(this.props.id)}>
        <h4>{this.props.title}</h4>
      </div>
    )
  }
}

export default ProjectCard