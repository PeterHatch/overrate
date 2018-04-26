import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HeroList from './HeroList.js'
import Hero from './Hero.js'

function App() {
  return (
    <Switch>
      <Route path='/hero/:name' component={Hero} />
      <Route exact path='/' component={HeroList} />
    </Switch>
  )
}

export default App
