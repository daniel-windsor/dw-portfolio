import React from 'react'

import { Link, animateScroll as scroll } from "react-scroll";


class Navbar extends React.Component {
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
              duration={500} >
              About Me
          </Link>
          </li>
          <li className='nav_item'>
            <Link
              activeClass="active"
              to='skills'
              spy={true}
              smooth={true}
              offset={-75}
              duration={500} >
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
              duration={500} >
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
              duration={500} >
              Contact Me
          </Link>
          </li>
        </ul>

      </div>
    )
  }
}

export default Navbar