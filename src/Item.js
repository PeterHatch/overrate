import React from 'react'
import icons from './icons.svg'
import currentEvent from './data/current-event.json'
import ItemSettings from './ItemSettings.js'
import items from './data/items.json'
import './Item.sass'

function Item({ id }) {
  let item = items[id]

  // Skip Overwatch League items for now
  if (item.group === 'overwatch-league') {
    return null
  }

  const newItem = ((item.group && item.group === currentEvent.event && item.year === currentEvent.year) ? 'new-item' : '')

  return pug`
    .item-wrapper
      .name(class=item.rarity)
        if item.group
          svg.event-icon(class=newItem viewBox="0 0 1 1")
            use(xlinkHref=(icons + "#" + item.group))
          | 
        | #{item.name}
    ItemSettings(id=id everyoneHas=item.availability === 'unlocked')
  `
}

export default Item
