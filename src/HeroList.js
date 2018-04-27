import React from 'react'
import { Link } from 'react-router-dom'
import groupData from './data/groups.json'
import './HeroList.sass'

function HeroList() {
  const heroNames = Object.keys(groupData.heroes)

  return (
    <React.Fragment>
      <h1>Heroes</h1>
      <nav className="heroes">
        {
          heroNames.map(name =>
            <HeroLink name={name}/>
          )
        }
        <SharedSpraysLink/>
        <PlayerIconsLink/>
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

export default HeroList
