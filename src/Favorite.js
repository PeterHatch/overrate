import React from 'react'
import icons from './icons.svg'

function Favorite(props) {
  return pug`
    .favorite
      label
        input(type="checkbox")
        svg.favorite-icon(viewBox="0 0 1 1")
          use(xlinkHref=(icons + "#heart"))
  `
}

export default Favorite
