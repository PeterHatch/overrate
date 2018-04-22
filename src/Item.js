import React from 'react'
import icons from './icons.svg'
import currentEvent from './data/current-event.json'
import ItemSettings from './ItemSettings.js'
import './Item.sass'

function Item(props) {
  const newItem = ((props.event && props.event === currentEvent && props.isNew) ? 'new-item' : '')
  return pug`
    // Status(have=have, favorite=favorite, rating=rating)
    .center-wrapper
      .name(class=props.quality)
        if props.event
          svg.event-icon(class=newItem viewBox="0 0 1 1")
            use(xlinkHref=(icons + "#" + props.event))
          | 
        | #{props.name}
    ItemSettings(id=props.id standardItem=props.standardItem)
  `
}

export default Item
