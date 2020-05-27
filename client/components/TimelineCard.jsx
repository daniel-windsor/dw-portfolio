import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom'

class TimelineCard extends React.Component {

  iconStyle = {
    background: '#8aa847',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  render() {
    return (
      <VerticalTimelineElement
        contentStyle={{ background: '#8aa847', color: 'black' }}
        contentArrowStyle={{ borderRight: '7px solid  #8aa847' }}
        date={this.props.date}
        iconStyle={this.iconStyle}
        icon={this.props.icon}>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
        <p>{this.props.description}</p>

        {
          this.props.github &&
          <span className='btn-bar'>
            <a href={this.props.github} target="_blank" className='customButton'>GitHub</a>
            <a href={this.props.project} target="_blank" className="customButton">Website</a>
          </span>
        }
      </VerticalTimelineElement>
    )
  }
}

export default TimelineCard