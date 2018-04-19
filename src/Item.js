import React from 'react'
import icons from './icons.svg'
import Rating from './Rating.js'
import Favorite from './Favorite.js'
import Have from './Have.js'
import Cost from './Cost.js'

function Item(props) {
  return pug`
    Rating
    Favorite
    Have(standardItem=props.standardItem)
    .name(class=props.quality)
      if props.event
        svg.event-icon(viewBox="0 0 1 1")
          use(xlinkHref=(icons + "#" + props.event))
        | 
      | #{props.name}
    Cost(quality=props.quality event=props.event isNew=props.isNew standardItem=props.standardItem)
  `
}

export default Item
