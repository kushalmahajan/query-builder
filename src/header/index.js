import React from 'react'
import CrossIcon from '../icons/cross'
import Button from '../button'
const Header = ({ query }) => {
  return (
    <div className='bg-indigo-500 w-full p-6'>
      <div className='flex'>
        <span className='text-white flex-grow'>Build your query</span>
        <Button
          text={<CrossIcon className='font-semibold' />}
          className='bg-indigo-700 px-1'
        />
      </div>
      <div className='bg-indigo-700 p-5 mt-4 rounded'>
        <span>
          <b className='text-white text-base'>Query:</b>
          {/* {query} */}
        </span>
      </div>
    </div>
  )
}
export default Header
