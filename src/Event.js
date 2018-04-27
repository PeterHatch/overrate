import React from 'react'
import ItemCategory from './ItemCategory.js'
import itemData from './data/items.json'

function Event({ match }) {
  const eventName = match.params.name
  const ids = eventItems(eventName)


  return (
    <React.Fragment>
      <h1>{eventName}</h1>
      <ItemCategory category={eventName} itemIds={ids}/>
    </React.Fragment>
  )
}

function allItems() {
  const items = itemData
  return Object.keys(items).map(key=>Object.assign(items[key], {'id': key}))
}

function eventItems(eventName) {
  return allItems().filter(item=>item['group']===eventName).map(item=>item['id'])
}

export default Event