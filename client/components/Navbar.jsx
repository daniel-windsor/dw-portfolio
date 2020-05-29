import React from 'react'

import { Link, animateScroll } from "react-scroll";


class Navbar extends React.Component {

  state = {
    active: 'about'
  }

  render() {
    return (
      <div className='navbar'>
        <ul className='nav_items'>
          <li className='nav_item'>
            <Link
              activeClass="active"
              to='about'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onSetActive={() => this.setState({ active: 'about' })} >
              About
          </Link>
          </li>
          <li className='nav_item'>
            <Link
              activeClass="active"
              to='skills'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onSetActive={() => this.setState({ active: 'skills' })} >
              Skills
          </Link>
          </li>
          <li className='nav_item'>
            <Link
              activeClass="active"
              to='projects'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onSetActive={() => this.setState({ active: 'projects' })} >
              Projects
          </Link>
          </li>
          <li className='nav_item'>
            <Link
              activeClass="active"
              to='contact'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500}
              onSetActive={() => this.setState({ active: 'contact' })} >
              Contact
          </Link>
          </li>
        </ul>

        <ul className='nav_items'>
          <li className={`nav_item ${this.state.active === 'about' ? 'invisible' : undefined}`} onClick={() => { animateScroll.scrollToTop() }}>Top</li>
        </ul>
      </div>
    )
  }
}

export default Navbar