import React from 'react'
import cx from 'classnames'

const Base = ({ text, handleClick, className }) => {
  return (
    <button
      className={cx(
        'px-1 py-1',
        className,
        'rounded border-gray-700 border text-white text-sm'
      )}
      onClick={() => handleClick()}
    >
      <span className='text-center'>{text}</span>
    </button>
  )
}
const Button = ({ type, text, handleClick, className }) => {
  if (type === 'primary') {
    return (
      <Base
        text={text}
        className={cx('bg-indigo-700', className)}
        handleClick={handleClick}
      />
    )
  }
  return <Base text={text} className={className} handleClick={handleClick} />
}

export default Button
