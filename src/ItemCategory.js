import React from 'react'
import Item from './Item.js'
import './ItemCategory.sass'

function ItemCategory({category, itemIds}) {
  return (
    <React.Fragment>
      <h2>{category}</h2>
      <div className='items-container'>
        {
          itemIds.map(itemId =>
            <Item key={itemId} id={itemId}/>
          )
        }
      </div>
    </React.Fragment>
  )
}

export default ItemCategory
