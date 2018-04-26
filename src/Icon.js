import React from 'react'
import icons from './icons.svg'

function Icon ({ id, className: additionalClassName }) {
  let className = "icon"
  if (additionalClassName) {
    className += ` ${additionalClassName}`
  }

  return (
    <svg className={className} viewBox="0 0 1 1">
      <use xlinkHref={`${icons}#${id}`}/>
    </svg>
  )
}

export default Icon
