import React from 'react'

class AboutMe extends React.Component {
  render () {
    return (
      <div id='about' className='container'>
        <div className='container_header'>
          <h1>About me</h1>
        </div>
        <div className='container_center'>
          <span className='container_content'>
            <p>
              I am a full stack web developer with a background in teaching. I love the combination of problem solving and creativity that developing provides. I find it extremely satisfying to work a problem through to a solution.
            </p>
            <p>
              I am an exceptionally quick learner. I went from very little coding knowledge to becoming a full stack JavaScript developer, able to create usable products, within three months. I have been acknowledged for my adaptability and ability to fit into a variety of teams and add value with my approach to our work and my skills.
            </p>
            <p>
              Learning and continual growth is important to me. I am looking for a work environment that will challenge me and provide ongoing growth and development opportunities.
            </p>
            <p>I'm based in Wellington, where I live with my family.  I am looking for permanent fulltime work, but will also be open to contracts.</p>
          </span>
        </div>
      </div>

    )
  }
}

export default AboutMe
