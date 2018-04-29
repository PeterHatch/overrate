import React from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

function Hero({ name, scrollTarget }) {
  const itemsByType = groupData.heroes[name]

  return (
    <React.Fragment>
      <h1>{name}</h1>
      {
        Object.entries(itemsByType).map(([categoryName, itemIds]) =>
          <ItemCategory key={categoryName} category={categoryName} itemIds={itemIds} hideHero scrollTarget={scrollTarget}/>
        )
      }
    </React.Fragment>
  )
}

export default Hero
