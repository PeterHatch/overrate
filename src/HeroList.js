import React from 'react'
import { Link } from 'react-router-dom'
import groupData from './data/groups.json'

function HeroList() {
  let heroNames = Object.keys(groupData.heroes)
  return pug`
    nav.heroes
      each name in heroNames
        div(key=name)
          Link(to='/hero/' + name)
            = name
  `
}

export default HeroList
