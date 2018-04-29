import React from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

function Event({ name, scrollTarget }) {
  const itemsByType = groupData.events[name]
  const englishName = name.replace(/^[a-z]/, match => match.toUpperCase()).replace(/-([a-z])/g, (_, match) => ` ${match.toUpperCase()}`)

  return (
    <React.Fragment>
      <h1>{englishName}</h1>
      {
        Object.entries(itemsByType).map(([categoryName, itemIds]) =>
          <ItemCategory key={categoryName} category={categoryName} itemIds={itemIds} hideEvent scrollTarget={scrollTarget}/>
        )
      }
    </React.Fragment>
  )
}

export default Event
