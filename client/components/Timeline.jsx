import React from 'react'
import moment from 'moment'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { projects } from '../../project'
import TimelineCard from './TimelineCard';


class Timeline extends React.Component {

  state = {
    expanded: 0
  }

  render() {
    return (
      <>
        <div className='header-container'>
          <h1>I began my web development career {moment(20200203, 'YYYYMMDD').fromNow()}</h1>
          <p>Here is my journey</p>
        </div>

        <VerticalTimeline>
          {
            projects.map((project, i) => <TimelineCard key={i} {...project} />)
          }
        </VerticalTimeline>
      </>
    )
  }
}

export default Timeline