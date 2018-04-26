import React from 'react'
import Icon from './Icon.js'
import ItemSettings from './ItemSettings.js'
import currentEvent from './data/current-event.json'
import items from './data/items.json'
import './Item.sass'

function Item({ id }) {
  let item = items[id]

  // Skip Overwatch League items for now
  if (item.group === 'overwatch-league') {
    return null
  }

  return (
    <React.Fragment>
      <ItemName item={item}/>
      <ItemSettings id={id} everyoneHas={item.availability === 'unlocked'}/>
    </React.Fragment>
  )
}

function ItemName({ item }) {
  let eventIcon = null
  if (item.group) {
    const newItem = (item.group === currentEvent.event && item.year === currentEvent.year)
    eventIcon = <Icon id={item.group} className={newItem ? "new-item" : null}/>
  }

  return (
    <div className="item-wrapper">
      <div className={`name ${item.rarity}`}>
        {eventIcon}
        {eventIcon ? ' ' : ''}
        {item.name}
      </div>
    </div>
  )
}

export default Item
