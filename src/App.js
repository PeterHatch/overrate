import React, { Component } from 'react'
import Hero from './Hero.js'

class App extends Component {
  render() {
    return pug`
      Hero(name="Ana")
    `
  }
}

export default App
