import React from 'react'
import icons from './icons.svg'

function Rating(props) {
  return pug`
    fieldset.rating
      label
        input(type="radio" name="rating" value="5")
        svg.rating-icon(viewBox="0 0 1 1")
          use(xlinkHref=(icons + "#star"))
      label
        input(type="radio" name="rating" value="4")
        svg.rating-icon(viewBox="0 0 1 1")
          use(xlinkHref=(icons + "#star"))
      label
        input(type="radio" name="rating" value="3")
        svg.rating-icon(viewBox="0 0 1 1")
          use(xlinkHref=(icons + "#star"))
      label
        input(type="radio" name="rating" value="2")
        svg.rating-icon(viewBox="0 0 1 1")
          use(xlinkHref=(icons + "#star"))
      label
        input(type="radio" name="rating" value="1")
        svg.rating-icon(viewBox="0 0 1 1")
          use(xlinkHref=(icons + "#star"))
  `
}

export default Rating
