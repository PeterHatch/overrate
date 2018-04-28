import React from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

function Event({ match }) {
  const name = match.params.name
  const itemsByType = groupData.events[name]

  return (
    <React.Fragment>
      <h1>{name}</h1>
      {
        Object.entries(itemsByType).map(([categoryName, itemIds]) =>
          <ItemCategory key={categoryName} category={categoryName} itemIds={itemIds} hideEvent/>
        )
      }
    </React.Fragment>
  )
}

export default Event
