import React from 'react'
import Item from './Item.js'
import './ItemCategory.sass'

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
      each itemId in props.itemIds
        Item(key=itemId id=itemId)
  `
}

export default ItemCategory
