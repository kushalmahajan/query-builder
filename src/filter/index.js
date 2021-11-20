import React from 'react'
import Select from 'react-select'
import Button from '../button'
import DeleteIcon from '../icons/delete'

const fields = [
  {
    label: 'Prediction',
    options: [
      { label: 'Theme', value: 'theme' },
      { label: 'Subtheme', value: 'subtheme' },
      { label: 'Reason', value: 'reason' },
      { label: 'Language', value: 'language' }
    ]
  },
  {
    label: 'Common',
    options: [
      { label: 'CustomerId', value: 'customer_id' },
      { label: 'Group 2, option 2', value: 'value_2' }
    ]
  }
]

const conditions = [
  {
    label: 'Equals',
    value: '=='
  },
  {
    label: 'Does not equals',
    value: '!='
  },
  {
    label: 'Like',
    value: '%'
  }
]
const criterias = [
  {
    label: 'Offers',
    value: 'offers'
  },
  {
    label: 'Promotions',
    value: 'promotions'
  }
]

const Filter = ({ filterState, setFilterState, rowIndex, removeFilter }) => {
  const { field, condition, criteria } = filterState
  return (
    <div className='flex gap-4 mt-10 mb-5'>
      <Select
        value={field}
        onChange={(selectedOption) =>
          setFilterState({ item: 'field', selectedOption, rowIndex })
        }
        options={fields}
        styles={{}}
        className='flex-grow w-full text-sm'
      />

      <Select
        value={condition}
        onChange={(selectedOption) =>
          setFilterState({ item: 'condition', selectedOption, rowIndex })
        }
        options={conditions}
        styles={{}}
        className='flex-grow w-full text-sm'
      />

      <Select
        value={criteria}
        onChange={(selectedOption) =>
          setFilterState({ item: 'criteria', selectedOption, rowIndex })
        }
        options={criterias}
        styles={{}}
        className='flex-grow w-full text-sm'
      />
      <Button
        text={<DeleteIcon />}
        className='ml-2 px-2'
        handleClick={() => removeFilter(rowIndex)}
      />
    </div>
  )
}
export default Filter
