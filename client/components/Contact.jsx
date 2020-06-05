import React from 'react'

class Contact extends React.Component {

  render() {
    return (
      <div id='contact' className='container'>
        <div className='container_header'>
          <h1>Contact</h1>
        </div>

        <div className='subtitle' style={{ color: '#D4BB7A'}}>
          <h2>Why not get in touch? I'd love to work with you!</h2>
        </div>

        <div className='container_col'>
          <a href='mailto:daniel.windsor@protonmail.com' target='_blank' className='box_contact'>
            <i className="fas fa-envelope-square contact-icon"></i>
            <h2>Email</h2>
          </a>

          <a href='https://www.linkedin.com/in/daniel-windsor-7785361a7/' target='_blank' className='box_contact'>
            <i className="fab fa-linkedin contact-icon"></i>
            <h2>LinkedIn</h2>
          </a>

          <a href='https://github.com/daniel-windsor' target='_blank' className='box_contact'>
            <i className="fab fa-github-square contact-icon"></i>
            <h2>GitHub</h2>
          </a>

        </div>
      </div>
    )
  }
}

export default Contact