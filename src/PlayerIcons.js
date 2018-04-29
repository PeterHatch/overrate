import React from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

function PlayerIcons({ scrollTarget }) {
  const ids = groupData["player-icons"]

  return (
    <React.Fragment>
      <h1>Player Icons</h1>
      <ItemCategory category="Player Icons" itemIds={ids} scrollTarget={scrollTarget}/>
    </React.Fragment>
  )
}

export default PlayerIcons
