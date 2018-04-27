import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HeroList from './HeroList.js'
import Hero from './Hero.js'
import Event from './Event.js'
import SharedSprays from './SharedSprays.js'
import PlayerIcons from './PlayerIcons.js'

function App() {
  return (
    <Switch>
      <Route path='/hero/:name' component={Hero} />
      <Route path='/event/:name' component={Event} />
      <Route path='/shared-sprays' component={SharedSprays} />
      <Route path='/player-icons' component={PlayerIcons} />
      <Route exact path='/' component={HeroList} />
    </Switch>
  )
}

export default App
