import React from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

function Hero({ match }) {
    let name = match.params.name
    let heroGroups = groupData.heroes[name]

  return pug`
    h1
      = name
    ItemCategory(category='Skins' itemIds=heroGroups.skins)
    ItemCategory(category='Emotes' itemIds=heroGroups.emotes)
    ItemCategory(category='Victory Poses' itemIds=heroGroups.poses)
    ItemCategory(category='Voice Lines' itemIds=heroGroups['voice-lines'])
    ItemCategory(category='Sprays' itemIds=heroGroups.sprays)
    ItemCategory(category='Highlight Intros' itemIds=heroGroups['highlight-intros'])
  `
}

export default Hero
