import React from 'react'
import cx from 'classnames'
import Button from '../button'
import Filter from '../filter'
import { conjunctions } from '../index'

const Card = ({
  groupIndex,
  handleConjunction,
  state,
  handleAddFilter,
  handleFilterState,
  removeFilter,
  join,
  className
}) => {
  const renderFilters = () => {
    return filters.map((item, rowIndex) => {
      return (
        <Filter
          key={rowIndex}
          filterState={item}
          setFilterState={(filterObj) =>
            handleFilterState({ ...filterObj, groupIndex })
          }
          rowIndex={rowIndex}
          removeFilter={() => removeFilter(rowIndex, groupIndex)}
        />
      )
    })
  }
  const { filters, conjunction } = state
  return (
    <div className={cx('w-full bg-gray-800 rounded-sm p-5', className)}>
      <div>
        <Button
          type={conjunction === conjunctions[0] ? 'primary' : ''}
          text='AND'
          handleClick={() => handleConjunction(conjunctions[0], groupIndex)}
          className='rounded-r-none px-2'
        />
        <Button
          type={conjunction === conjunctions[1] ? 'primary' : ''}
          text='OR'
          handleClick={() => handleConjunction(conjunctions[1], groupIndex)}
          className='rounded-l-none px-2'
        />
      </div>
      {renderFilters()}
      <Button
        type='primary'
        text='+ Add filter'
        handleClick={() => handleAddFilter(groupIndex)}
        className='px-2'
      />
    </div>
  )
}
export default Card
