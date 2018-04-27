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
      <Route exact path='/' component={HeroList} />
      <Route exact path='/sharedSprays' component={SharedSprays} />
      <Route exact path='/playerIcons' component={PlayerIcons} />
      <Route path='/event/:name' component={Event} />
    </Switch>
  )
}

export default App
