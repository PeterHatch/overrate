import React from 'react'
import Icon from './Icon.js'
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
    return (
      <div className="settings">
        <div className="have">
          <label>
            <input type="checkbox" checked={this.state.have} disabled={this.props.everyoneHas} onChange={this.toggleStateFunc({have: true})}/>
            <Icon id="checkmark"/>
          </label>
        </div>
        <div className="favorite">
          <label>
            <input type="checkbox" checked={this.state.favorite} onChange={this.toggleStateFunc({favorite: true})}/>
            <Icon id="heart"/>
          </label>
        </div>
        <div className="rating">
          <RatingStar num={5} id={this.props.id} rating={this.state.rating} onChange={this.toggleStateFunc({rating: 5})}/>
          <RatingStar num={4} id={this.props.id} rating={this.state.rating} onChange={this.toggleStateFunc({rating: 4})}/>
          <RatingStar num={3} id={this.props.id} rating={this.state.rating} onChange={this.toggleStateFunc({rating: 3})}/>
          <RatingStar num={2} id={this.props.id} rating={this.state.rating} onChange={this.toggleStateFunc({rating: 2})}/>
          <RatingStar num={1} id={this.props.id} rating={this.state.rating} onChange={this.toggleStateFunc({rating: 1})}/>
        </div>
      </div>
    )
  }
}

function RatingStar({ id: itemId, num, rating, onChange }) {
  const elemId = `${itemId}-rate-${num}`
  return (
    <React.Fragment>
      <input id={elemId} type="checkbox" value={num} checked={rating === num} onChange={onChange}/>
      <label htmlFor={elemId}>
        <Icon id="star"/>
      </label>
    </React.Fragment>
  )
}

export default ItemSettings
