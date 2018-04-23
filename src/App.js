import React, { Component } from 'react'
import ItemCategory from './ItemCategory.js'
import groupData from './data/groups.json'

class App extends Component {
  render() {
      let heroGroups = groupData.heroes.Ana

    return pug`
      h1 Ana
      ItemCategory(category='Skins' itemIds=heroGroups.skins)
      ItemCategory(category='Emotes' itemIds=heroGroups.emotes)
      ItemCategory(category='Victory Poses' itemIds=heroGroups.poses)
      ItemCategory(category='Voice Lines' itemIds=heroGroups['voice-lines'])
      ItemCategory(category='Sprays' itemIds=heroGroups.sprays)
      ItemCategory(category='Highlight Intros' itemIds=heroGroups['highlight-intros'])
    `
  }
}

export default App
