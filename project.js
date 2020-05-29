import React from 'react'

export const projects = [
  {
    id: 0,
    title: 'SpacePants',
    date: '6th May - 14th May 2020',
    icon: <i className="fas fa-lg fa-user-astronaut"></i>,
    image: '/img/spacepants.png',
    gradient: ['#ac3e7b', '#3071a1'],
    github: 'https://github.com/piwakawaka-2020/SpacePants-frontEnd',
    project: 'https://spacepants.herokuapp.com/',
    description: 'SpacePants is a multiplayer party game where one person is an Alien and has to complete a series of odd tasks without the other human players noticing. I led a team of five other developers to create this product in one week.  It uses a react front end and websockets to communicate with the server.'
  },
  {
    id: 1,
    title: 'Feeding Ferments',
    date: '28th March - Present',
    icon: <i className="fas fa-lg fa-bread-slice"></i>,
    image: '/img/feeding_ferments.png',
    gradient: ['#d6d4c4', '#21381e'],
    github: 'https://github.com/daniel-windsor/ff_frontend',
    description: 'Feeding Ferments is a React Native application that allows for tracking of personal fermentation projects.  It provides a database of active ferments and their details, including notifications when it\'s feeding time.'
  },
  {
    id: 2,
    title: 'TrakPhat$tax',
    date: '29th April - 1st May 2020',
    icon: <i className="fas fa-lg fa-search-dollar"></i>,
    image: '/img/trakphat$tax.png',
    gradient: ['#d7d8ba', '#1f8251'],
    github: 'https://github.com/piwakawaka-2020/todo-full-stack',
    project: 'https://trakphatstax.herokuapp.com/#/',
    description: 'TrakPhat$tax (previously known as Show Me The Money) is an app that calculates a meeting\'s cost based on the attendee\'s hourly wage.  I was part of a team that put this project together in two days.  It uses full stack JavaScript - react in the front end with an express server and postgresql database'
  },
  {
    id: 3,
    title: 'Chess (For the Sophistocated)',
    date: '24th February - 11th March 2020',
    icon: <i className="fas fa-lg fa-chess-king"></i>,
    image: '/img/chess.png',
    gradient: ['#2c3d40', '#25282a'],
    github: 'https://github.com/daniel-windsor/chess-collab',
    project: 'https://daniel-windsor.github.io/sophistocated-chess/',
    description: 'Chess built entirely in native JavaScript using DOM manipulation.  As a bonus it includes an AI that occasionally cheats.'
  },
  {
    id: 4,
    title: 'Calculator Time',
    date: '19th February - 22nd February 2020',
    icon: <i className="fas fa-lg fa-calculator"></i>,
    image: '/img/calculator.png',
    gradient: ['#576a50', '#598449'],
    github: 'https://github.com/daniel-windsor/calculator',
    project: 'https://daniel-windsor.github.io/calculator-time/',
    description: 'The very first project I did as a brand new developer.  A calculator in native JavaScript'
  },
]