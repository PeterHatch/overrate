import React from 'react'
import icons from './icons.svg'
import currentEvent from './data/current-event.json'

function Cost(props) {
  let cost
  switch(props.quality) {
    case 'common':
      cost = 25
      break
    case 'rare':
      cost = 75
      break
    case 'epic':
      cost = 250
      break
    case 'legendary':
      cost = 1000
      break
  }

  const inactiveEvent = props.event && props.event !== currentEvent
  const inactiveAttribute = inactiveEvent ? 'currently-unavailable' : ''
  if(props.event && props.event === currentEvent && props.isNew) {
    cost = cost * 3
  }

  return pug`
    unless props.standardItem
      .cost(className=inactiveAttribute)
        svg.cost-icon(viewBox="0 0 1 1")
          use(xlinkHref=icons + "#currency")
        = cost
    else
      |
  `
}

export default Cost
