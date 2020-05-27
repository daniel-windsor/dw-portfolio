import React from 'react'

import Navbar from './Navbar'
import Timeline from './Timeline'
import Contact from './Contact'
import AboutMe from './AboutMe'
import SkillsContainer from './SkillsContainer'

const App = () => {
  return (
    <>
      <Navbar />
        <AboutMe id="aboutMe" />
        <SkillsContainer id="skills" />
        <Contact />
    </>
  )
}

export default App
