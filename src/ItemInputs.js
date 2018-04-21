import React from 'react'
import icons from './icons.svg'
import './ItemInputs.sass'

function ItemInputs(props) {
  let name = props.id + "-rate"

  return pug`
    .center-wrapper
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
        .rating
          input(id=props.id + "-rate-5" type="radio" name=name value="5")
          label(for=props.id + "-rate-5")
            svg.rating-icon(viewBox="0 0 1 1")
              use(xlinkHref=(icons + "#star"))
          input(id=props.id + "-rate-4" type="radio" name=name value="4")
          label(for=props.id + "-rate-4")
            svg.rating-icon(viewBox="0 0 1 1")
              use(xlinkHref=(icons + "#star"))
          input(id=props.id + "-rate-3" type="radio" name=name value="3")
          label(for=props.id + "-rate-3")
            svg.rating-icon(viewBox="0 0 1 1")
              use(xlinkHref=(icons + "#star"))
          input(id=props.id + "-rate-2" type="radio" name=name value="2")
          label(for=props.id + "-rate-2")
            svg.rating-icon(viewBox="0 0 1 1")
              use(xlinkHref=(icons + "#star"))
          input(id=props.id + "-rate-1" type="radio" name=name value="1")
          label(for=props.id + "-rate-1")
            svg.rating-icon(viewBox="0 0 1 1")
              use(xlinkHref=(icons + "#star"))
  `
}

export default ItemInputs
