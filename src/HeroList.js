import React from 'react'
import { Link } from 'react-router-dom'
import groupData from './data/groups.json'
import './HeroList.sass'

function HeroList() {
  const heroNames = Object.keys(groupData.heroes)
  const heroLinks = heroNames.map((name) => <HeroLink name={name}/>)

  return (
    <React.Fragment>
      <h1>Heroes</h1>
      <nav className="heroes">
        {heroLinks}
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

export default HeroList
