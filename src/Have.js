import React from 'react'

function Have(props) {
  return pug`
    .have
      if props.standardItem
        input(type="checkbox" checked=true disabled=true)
      else
        input(type="checkbox")
  `
}

export default Have
