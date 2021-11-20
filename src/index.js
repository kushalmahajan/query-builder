import React, { useState, useEffect } from 'react'
// import cx from 'classnames'
import 'tailwindcss/tailwind.css'
import Button from './button'
import Card from './card'
import Header from './header'

export const conjunctions = ['&&', '||']

export const QueryBuilder = () => {
  const [state, setState] = useState([
    {
      filters: [{ field: null, condition: null, criteria: null }],
      conjunction: conjunctions[0]
    }
  ])

  const handleAddGroup = () => {
    setState([
      ...state,
      {
        filters: [{ field: null, condition: null, criteria: null }],
        conjunction: conjunctions[0]
      }
    ])
  }
  const handleConjunction = (conjunction, groupIndex) => {
    state[groupIndex].conjunction = conjunction
    setState([...state])
  }
  const handleFilterState = ({
    item,
    selectedOption,
    rowIndex,
    groupIndex
  }) => {
    state[groupIndex].filters[rowIndex][item] = selectedOption
    setState([...state])
  }
  const handleAddFilter = (groupIndex) => {
    state[groupIndex].filters.push({
      field: null,
      condition: null,
      criteria: null
    })
    setState([...state])
  }
  const removeFilter = (rowIndex, groupIndex) => {
    if (state[groupIndex].filters.length === 1) return
    state[groupIndex].filters.splice(rowIndex, 1)
    setState([...state])
  }

  const render = () => {
    return state.map((item, idx) => {
      return (
        <Card
          key={idx}
          state={state[idx]}
          className='mb-5'
          groupIndex={idx}
          handleConjunction={handleConjunction}
          handleAddFilter={handleAddFilter}
          removeFilter={removeFilter}
          handleFilterState={handleFilterState}
        />
      )
    })
  }
  const [query, setQuery] = useState('')
  const buildQuery = () => {
    // eslint-disable-next-line no-unused-vars
    let filterQuery = ''
    for (let i = 0; i < state.length; i++) {
      const group = state[i]
      for (let j = 0; j < group.length; j++) {
        const filter = group[j]
        if (j === 0) {
          filterQuery += `"field.${filter.field?.value} ${filter.condition?.value} \\"${filter.criteria?.value}"\\"`
        } else {
          filterQuery += `${join} "field.${filter.field?.value} ${filter.condition?.value} \\"${filter.criteria?.value}"\\"`
        }
      }
    }
    console.log(filterQuery)
    setQuery(filterQuery)
  }
  useEffect(() => {
    buildQuery()
  }, [state])

  return (
    <div className='w-full bg-gray-900 pb-20'>
      <Header query={query} />
      <div className='container mt-52 mx-auto w-full'>
        {render()}
        <Button
          text='+ Add New gropup filter'
          type='primary'
          handleClick={handleAddGroup}
          className='px-2'
        />
      </div>
    </div>
  )
}
