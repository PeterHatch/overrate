import React from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

function Hero({ match }) {
  const name = match.params.name
  const itemsByType = groupData.heroes[name]

  return (
    <React.Fragment>
      <h1>{name}</h1>
      {
        Object.entries(itemsByType).map(([categoryName, itemIds]) =>
          <ItemCategory key={categoryName} category={categoryName} itemIds={itemIds}/>
        )
      }
    </React.Fragment>
  )
}

export default Hero
