import React from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

function PlayerIcons({ scrollTarget }) {
  const ids = groupData["player-icons"]

  return (
    <React.Fragment>
      <ItemCategory category="Player Icons" itemIds={ids} onlyCategory={true} scrollTarget={scrollTarget}/>
    </React.Fragment>
  )
}

export default PlayerIcons
