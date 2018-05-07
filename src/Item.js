import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon.js'
import ItemSettings from './ItemSettings.js'
import items from './data/items.json'
import './Item.sass'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.itemRef = React.createRef()
  }

  render() {
    const {id, hideHero, hideEvent} = this.props
    const item = items[id]

    // Skip Overwatch League items for now
    if (item.group === 'overwatch-league') {
      return null
    }

    return (
      <React.Fragment>
        <div className="item-wrapper" ref={this.itemRef}>
          <ItemName id={id} hideHero={hideHero} hideEvent={hideEvent}/>
        </div>
        <div className="item-wrapper">
          <ItemSettings id={id} everyoneHas={item.availability === 'unlocked'}/>
        </div>
      </React.Fragment>
    )
  }

  componentDidMount() {
    const {isScrollTarget, headerRef} = this.props
    if (isScrollTarget) {
      headerRef.current.scrollIntoView({behavior: "instant", block: "start"})
      this.itemRef.current.scrollIntoView({behavior: "instant", block: "nearest"})
    }
  }
}

function ItemName({ id, hideHero, hideEvent }) {
  const item = items[id]

  let newItem = null
  if (item.new) {
    newItem = (
      <span className="new">New</span>
    )
  }

  let eventIcon = null
  if (item.group && !hideEvent) {
    eventIcon = (
      <Link to={`/event/${item.group}#${id}`}>
        <Icon id={item.group} className={newItem ? "new-item" : null}/>
      </Link>
    )
  }

  const hero = hideHero ? null : item.hero

  return (
    <React.Fragment>
      {
        do { if (hero) {
          <div className="hero">
            <Link to={`/hero/${hero}#${id}`}>{hero}</Link>
          </div>
        }}
      }
      <div className={`name ${item.rarity}`}>
        {newItem}
        {newItem ? ' ' : ''}
        {eventIcon}
        {eventIcon ? ' ' : ''}
        {item.name}
      </div>
    </React.Fragment>
  )
}

export default Item
