import React, { useEffect, useState } from 'react'
// import cx from 'classnames'
import Button from '../button'
import styles from './card.module.css'
import Filter from '../filter'

const joins = ['&&', '||']
const Card = ({ text }, ref) => {
  const [join, setJoin] = useState(joins[0])
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState([
    { field: null, condition: null, criteria: null }
  ])

  const handleAddFilter = () => {
    setFilters([...filters, { field: null, condition: null, criteria: null }])
  }
  const removeFilter = (rowIndex) => {
    if (filters.length === 1) return
    filters.splice(rowIndex, 1)
    setFilters([...filters])
  }
  // move up later
  const buildQuery = () => {
    // eslint-disable-next-line no-unused-vars
    let filterQuery = ''
    for (let i = 0; i < filters.length; i++) {
      const filter = filters[i]
      if (i === 0) {
        filterQuery += `"field.${filter.field?.value} ${filter.condition?.value} \\"${filter.criteria?.value}"\\"`
      } else {
        filterQuery += `${join} "field.${filter.field?.value} ${filter.condition?.value} \\"${filter.criteria?.value}"\\"`
      }
    }
    console.log(filterQuery)
    setQuery(filterQuery)
  }

  const handleFilterState = ({ item, selectedOption, rowIndex }) => {
    filters[rowIndex][item] = selectedOption
    setFilters([...filters])
  }
  useEffect(() => {
    buildQuery()
  }, [filters])

  const renderFilters = () => {
    return filters.map((item, rowIndex) => {
      return (
        <Filter
          key={rowIndex}
          filterState={item}
          setFilterState={handleFilterState}
          rowIndex={rowIndex}
          removeFilter={removeFilter}
        />
      )
    })
  }

  return (
    <div className={styles.card}>
      <div>
        <Button
          type='primary'
          text='AND'
          handleClick={() => setJoin(joins[0])}
          className='rounded-r-none'
        />
        <Button
          text='OR'
          handleClick={() => setJoin(joins[1])}
          className='rounded-l-none'
        />
      </div>

      {/* Figure out a render logic for dynamic list */}
      {renderFilters()}
      <Button
        type='primary'
        text='+ Add filter'
        handleClick={handleAddFilter}
      />
    </div>
  )
}
export default Card
