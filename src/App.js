import React, { Component } from 'react'
import ItemCategory from './ItemCategory.js'
import itemData from './data/ana-items.json'

class App extends Component {
  render() {
    return pug`
      h1 Ana
      ItemCategory(category='Skins' items=itemData.skins)
      ItemCategory(category='Emotes' items=itemData.emotes)
      ItemCategory(category='Victory Poses' items=itemData.poses)
      ItemCategory(category='Voice Lines' items=itemData.voicelines)
      ItemCategory(category='Sprays' items=itemData.sprays)
      ItemCategory(category='Highlight Intros' items=itemData.intros)
    `
  }
}

export default App
