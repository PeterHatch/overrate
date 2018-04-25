import React from 'react'
import { Link } from 'react-router-dom'
import groupData from './data/groups.json'
import './HeroList.sass'

function HeroList() {
  let heroNames = Object.keys(groupData.heroes)
  return pug`
    h1 Heroes
    nav.heroes
      each name in heroNames
        Link(key=name to='/hero/' + name)
          img(src='/hero-select/' + name.replace(':', '') + '.png')
          if name === 'Widowmaker'
            span.small
              = name
          else
            span
              = name
  `
}

export default HeroList
