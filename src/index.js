import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import './styles.sass'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
