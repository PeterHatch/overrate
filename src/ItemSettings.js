import React from 'react'
import icons from './icons.svg'
import './ItemSettings.sass'

class ItemSettings extends React.Component {
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
      let value = charValue.charCodeAt(0) - 0x41
      let state = {have: false, favorite: false, rating: false}
      if (value >= 12) {
        state.favorite = true
        value -= 12
      }
      if (value >= 6) {
        state.have = true
        value -= 6
      }
      if (value > 0) {
        state.rating = value
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
    const charValue = String.fromCharCode(value + 0x41)
    window.localStorage.setItem(this.props.id, charValue)
  }

  render() {
    return pug`
      .item-wrapper
        .settings
          .have
            label
              input(type="checkbox" checked=this.state.have disabled=this.props.standardItem onChange=this.toggleStateFunc({have: true}))
              svg.have-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#checkmark"))
          .favorite
            label
              input(type="checkbox" checked=this.state.favorite onChange=this.toggleStateFunc({favorite: true}))
              svg.favorite-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#heart"))
          .rating
            input(id=this.props.id + "-rate-5" type="checkbox" value="5" checked=this.state.rating === 5 onChange=this.toggleStateFunc({rating: 5}))
            label(for=this.props.id + "-rate-5")
              svg.rating-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#star"))
            input(id=this.props.id + "-rate-4" type="checkbox" value="4" checked=this.state.rating === 4 onChange=this.toggleStateFunc({rating: 4}))
            label(for=this.props.id + "-rate-4")
              svg.rating-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#star"))
            input(id=this.props.id + "-rate-3" type="checkbox" value="3" checked=this.state.rating === 3 onChange=this.toggleStateFunc({rating: 3}))
            label(for=this.props.id + "-rate-3")
              svg.rating-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#star"))
            input(id=this.props.id + "-rate-2" type="checkbox" value="2" checked=this.state.rating === 2 onChange=this.toggleStateFunc({rating: 2}))
            label(for=this.props.id + "-rate-2")
              svg.rating-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#star"))
            input(id=this.props.id + "-rate-1" type="checkbox" value="1" checked=this.state.rating === 1 onChange=this.toggleStateFunc({rating: 1}))
            label(for=this.props.id + "-rate-1")
              svg.rating-icon(viewBox="0 0 1 1")
                use(xlinkHref=(icons + "#star"))
    `
  }
}

export default ItemSettings
