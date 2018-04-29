import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import HeroList from './HeroList.js'
import Hero from './Hero.js'
import Event from './Event.js'
import SharedSprays from './SharedSprays.js'
import PlayerIcons from './PlayerIcons.js'

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      if (!this.props.location.hash) {
        window.scrollTo(0, 0)
      }
    }
  }

  render() {
    let scrollTarget = null
    if (this.props.location.hash) {
      scrollTarget = this.props.location.hash.substring(1)
    }

    return (
      <Switch>
        <Route path='/hero/:name' render={ props => (
          <Hero name={props.match.params.name} scrollTarget={scrollTarget}/>
        )} />
        <Route path='/event/:name' render={ props => (
          <Event name={props.match.params.name} scrollTarget={scrollTarget}/>
        )} />
        <Route path='/shared-sprays' render={ props => (
          <SharedSprays scrollTarget={scrollTarget}/>
        )} />
        <Route path='/player-icons' render={ props => (
          <PlayerIcons scrollTarget={scrollTarget}/>
        )} />
        <Route exact path='/' component={HeroList} />
      </Switch>
    )
  }
}

export default withRouter(App)
