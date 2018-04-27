import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.js'
import groupData from './data/groups.json'
import './HeroList.sass'

function HeroList() {
  const heroNames = Object.keys(groupData.heroes)
  const eventNames = Object.keys(groupData.events)

  return (
    <React.Fragment>
      <h1>Heroes</h1>
      <nav className="heroes">
        {
          heroNames.map(name =>
            <HeroLink key={name} name={name}/>
          )
        }
      </nav>
      <h1>Shared Content</h1>
      <nav className="text-links">
        <div>
          <Link to={`/shared-sprays`}>Shared Sprays</Link>
        </div>
        <div>
          <Link to={`/player-icons`}>Player Icons</Link>
        </div>
      </nav>
      <h1>Events</h1>
      <nav className="text-links">
        {
          eventNames.map(name =>
            <EventLink key={name} name={name}/>
          )
        }
      </nav>
    </React.Fragment>
  )
}

function HeroLink({ name }) {
  const smallText = (name === 'Widowmaker')

  return (
    <Link to={`/hero/${name}`}>
      <img src={`/hero-select/${name.replace(':', '')}.png`} alt=""/>
      <span className={smallText ? 'small' : null}>{name}</span>
    </Link>
  )
}

function EventLink({ name }) {
  const nameAsId = name.toLowerCase().replace(/ /g, '-')

  return (
    <div>
      <Link to={`/event/${name}`}>
        <Icon id={nameAsId}/>
        {` ${name} `}
        <Icon id={nameAsId}/>
      </Link>
    </div>
  )
}

export default HeroList
