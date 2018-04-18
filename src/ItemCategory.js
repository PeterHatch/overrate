import React from 'react'
import Item from './Item.js'

let eventTranslation = {
  "SUMMER_GAMES": "summer-games",
  "HALLOWEEN": "halloween",
  "WINTER_WONDERLAND": "winter-wonderland",
  "LUNAR_NEW_YEAR": "lunar-new-year",
  "UPRISING": "archives",
  "ANNIVERSARY": "anniversary",
}

function ItemCategory(props) {
  return pug`
    h2 #{props.category}
    .items-container
      each item in props.items
        Item(key=item.id name=item.name quality=item.quality standardItem=item.standardItem event=eventTranslation[item.event] isNew=item.isNew)
  `
}

export default ItemCategory
