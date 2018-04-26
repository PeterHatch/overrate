import React from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

function Hero({ match }) {
  const name = match.params.name
  const heroGroups = groupData.heroes[name]

  return (
    <React.Fragment>
      <h1>{name}</h1>
      <ItemCategory category='Skins' itemIds={heroGroups.skins}/>
      <ItemCategory category='Emotes' itemIds={heroGroups.emotes}/>
      <ItemCategory category='Victory Poses' itemIds={heroGroups.poses}/>
      <ItemCategory category='Voice Lines' itemIds={heroGroups['voice-lines']}/>
      <ItemCategory category='Sprays' itemIds={heroGroups.sprays}/>
      <ItemCategory category='Highlight Intros' itemIds={heroGroups['highlight-intros']}/>
    </React.Fragment>
  )
}

export default Hero
