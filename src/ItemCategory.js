import React from 'react'
import Item from './Item.js'
import './ItemCategory.sass'

function ItemCategory({category, itemIds, hideHero, hideEvent}) {
  return (
    <React.Fragment>
      <h2>{category}</h2>
      <div className='items-container'>
        {
          itemIds.map(itemId =>
            <Item key={itemId} id={itemId} hideHero={hideHero} hideEvent={hideEvent}/>
          )
        }
      </div>
    </React.Fragment>
  )
}

export default ItemCategory
