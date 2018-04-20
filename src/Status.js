import React from 'react'
import icons from './icons.svg'
import './Status.sass'

function Status(props) {
  let ratingAttr = 'unrated'
  if (props.rating) {
    ratingAttr = 'rated' + props.rating
  }

  let symbolName = ''
  if (props.have) {
    if (props.favorite) {
      symbolName = 'star'
    } else {
      symbolName = 'checkmark'
    }
  } else {
    if (props.favorite) {
      symbolName = 'heart'
    } else {
      symbolName = 'dash'
    }
  }

  return pug`
    .status
      svg.status-icon(className=ratingAttr viewBox="0 0 1 1")
        use(xlinkHref=(icons + "#" + symbolName))
  `
}

export default Status
