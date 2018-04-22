import React from 'react'
import icons from './icons.svg'
import './ItemInputs.sass'

class ItemInputs extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.loadStateFromLocalStorage()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.saveStateToLocalStorage()
    }
  }

  toggleStateFunc(newState) {
    return this.toggleState.bind(this, newState)
  }

  toggleState(newState, e) {
    this.setState(prevState => {
      for (const key in newState) {
        if (newState[key] === prevState[key]) {
          newState[key] = false
        }
      }
      return newState
    })
  }

  loadStateFromLocalStorage() {
    const charValue = window.localStorage.getItem(this.props.id)
    if (charValue) {
      let value = charValue.charCodeAt(0) - 0x20
      let state = {}
      state.favorite = (value >= 12)
      value -= 12
      state.have = (value >= 6)
      value -= 6
      if (value > 0) {
        state.rating = value
      }
      else {
        state.rating = false
      }
      return state
    }
    return {have: !!this.props.standardItem, favorite: false, rating: false}
  }

  saveStateToLocalStorage() {
    let value = this.state.rating || 0
    if (this.state.have) {
      value += 6
    }
    if (this.state.favorite) {
      value += 12
    }
    const charValue = String.fromCharCode(value + 0x20)
    window.localStorage.setItem(this.props.id, charValue)
  }

  render() {
    let name = this.props.id + "-rate"

    return pug`
      .center-wrapper
        .edit
          .have
            label
              input(type="checkbox" checked=this.state.have disabled=this.props.standardItem onClick=this.toggleStateFunc({have: true}))
              svg.have-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#checkmark"))
          .favorite
            label
              input(type="checkbox" checked=this.state.favorite onClick=this.toggleStateFunc({favorite: true}))
              svg.favorite-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#heart"))
          .rating
            input(id=this.props.id + "-rate-5" type="radio" name=name value="5" checked=this.state.rating === 5 onClick=this.toggleStateFunc({rating: 5}))
            label(for=this.props.id + "-rate-5")
              svg.rating-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#star"))
            input(id=this.props.id + "-rate-4" type="radio" name=name value="4" checked=this.state.rating === 4 onClick=this.toggleStateFunc({rating: 4}))
            label(for=this.props.id + "-rate-4")
              svg.rating-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#star"))
            input(id=this.props.id + "-rate-3" type="radio" name=name value="3" checked=this.state.rating === 3 onClick=this.toggleStateFunc({rating: 3}))
            label(for=this.props.id + "-rate-3")
              svg.rating-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#star"))
            input(id=this.props.id + "-rate-2" type="radio" name=name value="2" checked=this.state.rating === 2 onClick=this.toggleStateFunc({rating: 2}))
            label(for=this.props.id + "-rate-2")
              svg.rating-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#star"))
            input(id=this.props.id + "-rate-1" type="radio" name=name value="1" checked=this.state.rating === 1 onClick=this.toggleStateFunc({rating: 1}))
            label(for=this.props.id + "-rate-1")
              svg.rating-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#star"))
    `
  }
}

export default ItemInputs
