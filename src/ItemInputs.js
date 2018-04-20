import React from 'react'
import icons from './icons.svg'
import './ItemInputs.sass'

function ItemInputs(props) {
  return pug`
    .edit
      .have
        label
          if props.standardItem
            input(type="checkbox" checked=true disabled=true)
          else
            input(type="checkbox")
          svg.have-icon(viewBox="0 0 1 1")
            use(xlinkHref=(icons + "#checkmark"))
      .favorite
        label
          input(type="checkbox")
          svg.favorite-icon(viewBox="0 0 1 1")
            use(xlinkHref=(icons + "#heart"))
      fieldset.rating
        .rating-flex
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

export default ItemInputs
