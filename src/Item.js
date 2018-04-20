import React from 'react'
import icons from './icons.svg'
import ItemInputs from './ItemInputs.js'
import './Item.sass'

function Item(props) {
  const n = props.id.split('').map(c=>c.charCodeAt(0)).reduce((a,v)=>a+((a<<7)+(a<<3))^v)
  const have = props.standardItem || n % 2 === 0
  const favorite = n % 3 === 0
  const rating_seed = Math.abs(n % 13)
  let rating = null
  switch(rating_seed) {
    case 0:
      rating = 1
      break
    case 1:
    case 2:
      rating = 2
      break
    case 3:
    case 4:
    case 5:
    case 6:
      rating = 3
      break
    case 7:
    case 8:
      rating = 4
      break
    case 9:
      rating = 5
      break
  }

  return pug`
    // Status(have=have, favorite=favorite, rating=rating)
    .name(class=props.quality)
      if props.event
        svg.event-icon(viewBox="0 0 1 1")
          use(xlinkHref=(icons + "#" + props.event))
        | 
      | #{props.name}
    // Cost(quality=props.quality event=props.event isNew=props.isNew standardItem=props.standardItem)
    ItemInputs
  `
}

export default Item
