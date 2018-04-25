import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HeroList from './HeroList.js'
import Hero from './Hero.js'

function App() {
  return pug`
    Switch
      Route(path='/hero/:name' component=Hero)
      Route(exact path='/' component=HeroList)
  `
}

export default App
