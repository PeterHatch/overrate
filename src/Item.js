import React from 'react'
import icons from './icons.svg'
import ItemInputs from './ItemInputs.js'
import './Item.sass'

function Item(props) {
  return pug`
    // Status(have=have, favorite=favorite, rating=rating)
    .center-wrapper
      .name(class=props.quality)
        if props.event
          svg.event-icon(viewBox="0 0 1 1")
            use(xlinkHref=(icons + "#" + props.event))
          | 
        | #{props.name}
    ItemInputs
  `
}

export default Item
