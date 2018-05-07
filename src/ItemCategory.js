import React from 'react'
import Item from './Item.js'
import './ItemCategory.sass'

function ItemCategory({category, itemIds, onlyCategory, hideHero, hideEvent, scrollTarget}) {
  const headerRef = React.createRef()
  const header = onlyCategory ? (
    <h1 ref={headerRef}>{category}</h1>
  ) : (
    <h2 ref={headerRef}>{category}</h2>
  )

  return (
    <React.Fragment>
      {header}
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
