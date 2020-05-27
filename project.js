import React from 'react'
const moment = require('moment')

export const projects = [
  {
    id: 0,
    title: 'SpacePants',
    date: '6th May - 14th May 2020',
    icon: <i className="fas fa-lg fa-user-astronaut"></i>,
    image: '/img/spacepants.png',
    github: 'https://github.com/piwakawaka-2020/SpacePants-frontEnd',
    project: 'https://spacepants.herokuapp.com/',
    description: 'The Final Project.  I led a team of five other developers to create a multiplayer party game using web sockets'
  },
  {
    id: 1,
    title: 'Feeding Ferments',
    date: '28th March - Present',
    icon: <i className="fas fa-lg fa-bread-slice"></i>,
    image: '/img/feeding_ferments.png',
    github: 'https://github.com/daniel-windsor/feeding-ferments',
    project: 'nothing yet',
    description: 'During the course we had the opportunity to work on a personal project.  Feeding Ferments is an app that allows you to track your fermentations, as well as how and when they should be fed.  This app has been rebuilt from scratch several times as we learned about new tech.  Still  in progress.'
  },
  {
    id: 2,
    title: 'TrakPhat$tax',
    date: '29th April - 1st May 2020',
    icon: <i className="fas fa-lg fa-search-dollar"></i>,
    image: '/img/trakphat$tax.png',
    github: 'https://github.com/piwakawaka-2020/todo-full-stack',
    project: 'https://trakphatstax.herokuapp.com/#/',
    description: 'The first big group project with a clear set of requirements to meet.  TrakPhat$tax (previously known as Show Me The Money) is an app that calculates a meeting\'s cost based on the attendee\'s hourly wage.'
  },
  {
    id: 3,
    title: 'Chess (For the Sophistocated)',
    date: '24th February - 11th March 2020',
    icon: <i className="fas fa-lg fa-chess-king"></i>,
    image: '/img/chess.png',
    github: 'https://github.com/daniel-windsor/chess-collab',
    project: 'https://daniel-windsor.github.io/sophistocated-chess/',
    description: 'An exercise to practice the skills learned through foundations, and the first real attempt at peer coding.  Chess in vanilla JavaScript, with a (not so intelligent) AI.'
  },
  {
    id: 4,
    title: 'Calculator Time',
    date: '19th February - 22nd February 2020',
    icon: <i className="fas fa-lg fa-calculator"></i>,
    image: '/img/calculator.png',
    github: 'https://github.com/daniel-windsor/calculator',
    project: 'https://daniel-windsor.github.io/calculator-time/',
    description: 'The culmination of six weeks of self-study.'
  },
]