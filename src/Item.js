import React from 'react'
import icons from './icons.svg'
import currentEvent from './data/current-event.json'
import ItemSettings from './ItemSettings.js'
import items from './data/items.json'
import './Item.sass'

function Item(props) {
  let item = items[props.id]

  // FIXME: Make the data include which items are new again, and mark them.
  // const newItem = ((props.event && props.event === currentEvent && props.isNew) ? 'new-item' : '')
  const newItem = false

  if (item.group == 'overwatch-league') {
    return null
  }

  return pug`
    .item-wrapper
      .name(class=item.rarity)
        if item.group
          svg.event-icon(class=newItem viewBox="0 0 1 1")
            use(xlinkHref=(icons + "#" + item.group))
          | 
        | #{item.name}
    ItemSettings(id=props.id everyoneHas=item.availability === 'unlocked')
  `
}

export default Item
