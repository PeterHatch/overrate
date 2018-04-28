import React from 'react'
import Icon from './Icon.js'
import ItemSettings from './ItemSettings.js'
import currentEvent from './data/current-event.json'
import items from './data/items.json'
import './Item.sass'

function Item({ id, hideHero, hideEvent }) {
  let item = items[id]

  // Skip Overwatch League items for now
  if (item.group === 'overwatch-league') {
    return null
  }

  return (
    <React.Fragment>
      <ItemName item={item} hideHero={hideHero} hideEvent={hideEvent}/>
      <ItemSettings id={id} everyoneHas={item.availability === 'unlocked'}/>
    </React.Fragment>
  )
}

function ItemName({ item, hideHero, hideEvent }) {
  let eventIcon = null
  if (item.group && !hideEvent) {
    const newItem = (item.group === currentEvent.event && item.year === currentEvent.year)
    eventIcon = <Icon id={item.group} className={newItem ? "new-item" : null}/>
  }
  const hero = hideHero ? null : item.hero

  return (
    <div className="item-wrapper">
      {
        do { if (hero) {
          <div className="hero">{hero}</div>
        }}
      }
      <div className={`name ${item.rarity}`}>
        {eventIcon}
        {eventIcon ? ' ' : ''}
        {item.name}
      </div>
    </div>
  )
}

export default Item
