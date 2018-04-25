import React from 'react'
import Item from './Item.js'
import './ItemCategory.sass'

function ItemCategory({category, itemIds}) {
  return pug`
    h2 #{category}
    .items-container
      each itemId in itemIds
        Item(key=itemId id=itemId)
  `
}

export default ItemCategory
