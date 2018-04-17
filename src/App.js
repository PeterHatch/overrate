import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return pug`
      div.App
        header.App-header
          img.App-logo(src=logo alt="logo")
          h1.App-title Welcome to React
        p.App-intro
          | To get started, edit #[code src/App.js] and save to reload.
    `
  }
}

export default App
