import React from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

function SharedSprays({ scrollTarget }) {
  const ids = groupData["shared-sprays"]

  return (
    <React.Fragment>
      <ItemCategory category="Shared Sprays" itemIds={ids} onlyCategory={true} scrollTarget={scrollTarget}/>
    </React.Fragment>
  )
}

export default SharedSprays
