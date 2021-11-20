import React from 'react'
import cx from 'classnames'

const Base = ({ text, handleClick, className }) => {
  return (
    <button
      className={cx(
        'px-3 py-1',
        'rounded border-gray-700 border text-white',
        className
      )}
      onClick={() => handleClick()}
    >
      <span>{text}</span>
    </button>
  )
}
const Button = ({ type, text, handleClick, className }) => {
  if (type === 'primary') {
    return (
      <Base
        text={text}
        className={cx('bg-indigo-600', className)}
        handleClick={handleClick}
      />
    )
  }
  return <Base text={text} className={className} handleClick={handleClick} />
}

export default Button
