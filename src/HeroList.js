import React from 'react'
import { Link } from 'react-router-dom'
import groupData from './data/groups.json'
import './HeroList.sass'

function HeroList() {
  const heroNames = Object.keys(groupData.heroes)
  const eventNames = ["summer-games", "halloween-terror", "winter-wonderland", "lunar-new-year", "archives", "anniversary"]

  return (
    <React.Fragment>
      <h1>Heroes</h1>
      <nav className="heroes">
        {
          heroNames.map(name =>
            <HeroLink name={name}/>
          )
        }
      </nav>
      <h1>Shared Content</h1>
      <nav className="heroes">
        <SharedSpraysLink/>
        <PlayerIconsLink/>
      </nav>
      <h1>Events</h1>
      <nav className="heroes">
        {
          eventNames.map(name =>
            <EventLink name={name}/>
          )
        }
      </nav>
    </React.Fragment>
  )
}

function HeroLink({ name }) {
  const smallText = (name === 'Widowmaker')

  return (
    <Link key={name} to={`/hero/${name}`}>
      <img src={`/hero-select/${name.replace(':', '')}.png`} alt=""/>
      <span className={smallText ? 'small' : null}>{name}</span>
    </Link>
  )
}

function SharedSpraysLink() {
  return (
    <Link to={`/sharedSprays`}>
      <img src={`/hero-select/Logo.png`} alt=""/>
      <span className='small'>Shared Sprays</span>
    </Link>
  )
}

function PlayerIconsLink() {
  return (
    <Link to={`/playerIcons`}>
      <img src={`/hero-select/player-icons.png`} alt=""/>
      <span className='small'>Player Icons</span>
    </Link>
  )
}

function EventLink({ name }) {
  return (
    <Link key={name} to={`/event/${name}`}>
      <img src={`hero-select/Logo.png`} alt=""/>
      <span className='small'>{titleize(name)}</span>
    </Link>
  )
}

function titleize(name) {
  return name.split('-').map(name=>name[0].toUpperCase()+name.slice(1)).join(' ')
}

export default HeroList
