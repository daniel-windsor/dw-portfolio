import React from 'react'

class Navbar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <a href='#about' className='link'>About Me</a>
        <a href='#skills' className='link'>Skills</a>
        <a href='#projects' className='link'>Projects</a>
        <a href='#contact' className='link'>Contact</a>

      </div>
    )
  }
}

export default Navbar