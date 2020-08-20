import React from 'react'


import Navbar from './Navbar'
import ProjectContainer from './ProjectContainer'
import Contact from './Contact'
import AboutMe from './AboutMe'
import SkillsContainer from './SkillsContainer'
import LandingPage from './LandingPage'

import '../styles/style.scss'

import firebase from 'firebase/app'
import analytics from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyC95gm4P54VpevCvLwepQKamF_BliuCAqc",
  authDomain: "dw-portfolio-e264d.firebaseapp.com",
  databaseURL: "https://dw-portfolio-e264d.firebaseio.com",
  projectId: "dw-portfolio-e264d",
  storageBucket: "dw-portfolio-e264d.appspot.com",
  messagingSenderId: "287471345957",
  appId: "1:287471345957:web:cbc6dda82d6422f37f7acc",
  measurementId: "G-MWPT1522T9"
};

firebase.initializeApp(firebaseConfig)
firebase.analytics()

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
