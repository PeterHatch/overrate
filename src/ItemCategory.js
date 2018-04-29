import React from 'react'
import Item from './Item.js'
import './ItemCategory.sass'

function ItemCategory({category, itemIds, hideHero, hideEvent, scrollTarget}) {
  const headerRef = React.createRef()

  return (
    <React.Fragment>
      <h2 ref={headerRef}>{category}</h2>
      <div className='items-container'>
        {
          itemIds.map(itemId =>
            <Item key={itemId} id={itemId} hideHero={hideHero} hideEvent={hideEvent} isScrollTarget={itemId === scrollTarget} headerRef={headerRef}/>
          )
        }
      </div>
    </React.Fragment>
  )
}

export default ItemCategory
