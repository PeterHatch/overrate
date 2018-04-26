import React from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

function Hero({ match }) {
  const name = match.params.name
  const heroGroups = groupData.heroes[name]

  return (
    <React.Fragment>
      <h1>{name}</h1>
      {
        Object.entries(heroGroups).map(([categoryName, itemIds]) =>
          <ItemCategory category={categoryName} itemIds={itemIds}/>
        )
      }
    </React.Fragment>
  )
}

export default Hero
