import React from 'react'


import Navbar from './Navbar'
import ProjectContainer from './ProjectContainer'
import Contact from './Contact'
import AboutMe from './AboutMe'
import SkillsContainer from './SkillsContainer'
import LandingPage from './LandingPage'

class App extends React.Component {

  render() {
    return (
      <>
        <Navbar />
        <LandingPage />
        <AboutMe />
        <SkillsContainer />
        <ProjectContainer />
        <Contact />
      </>
    )
  }
}

export default App
