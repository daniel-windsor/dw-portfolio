import React from 'react'

class Contact extends React.Component {

  render() {
    return (
      <div id='contact' className='container'>
        <div className='container_header'>
          <h1>Contact</h1>
        </div>

        <div className='container_col'>

          <span className='box_contact'>
            <i className="fab fa-linkedin contact-icon"></i>
            <h2>LinkedIn</h2>
          </span>

          <span className='box_contact'>
            <i className="fab fa-github-square contact-icon"></i>
            <h2>GitHub</h2>
          </span>

          <span className='box_contact'>
            <i className="fas fa-envelope-square contact-icon"></i>
            <h2>Email</h2>
          </span>
        </div>
      </div>
    )
  }
}

export default Contact