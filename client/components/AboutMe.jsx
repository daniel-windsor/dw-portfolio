import React from 'react'

class AboutMe extends React.Component {
  render() {
    return (
      <div id='about' className='container'>
        <img className='img-hero' src="/hero-compressed.JPG"></img>
        <h1>About me</h1>
        <p>
          I am a full stack web developer with a background in teaching. I love the combination of problem solving and creativity that developing provides. I find it extremely satisfying to work a problem through to a solution.
        </p>
        <p>
          I am an exceptionally quick learner. I went from very little coding knowledge to becoming a full stack JavaScript developer, able to create usable products, within three months. I have been acknowledged for my adaptability and ability to fit into a variety of teams and add value with my approach to our work and my skills.
        </p>
        <p>
          Learning and continual growth is important to me. I am looking for a work environment that will challenge me and provide ongoing growth and development opportunities.
        </p>
      </div>
    )
  }
}

export default AboutMe