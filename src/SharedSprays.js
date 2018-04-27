import React from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

function SharedSprays() {

  const ids = groupData["shared-sprays"]
	return (
    <React.Fragment>
      <ItemCategory category="Shared Sprays" itemIds={ids}/>
    </React.Fragment>
  )
}

export default SharedSprays