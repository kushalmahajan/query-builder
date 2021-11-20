import React, { useState } from 'react'
// import cx from 'classnames'
import Button from '../button'
import styles from './card.module.css'
import Select from 'react-select'

const options = [
  {
    label: 'Prediction',
    options: [
      { label: 'Group 1, option 1', value: 'value_1' },
      { label: 'Group 1, option 2', value: 'value_2' }
    ]
  },
  {
    label: 'Common',
    options: [
      { label: 'Group 1, option 1', value: 'value_1' },
      { label: 'Group 1, option 2', value: 'value_2' }
    ]
  },
  { label: 'Another root option', value: 'value_4' }
]
const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: '1px dotted pink',
    color: state.selectProps.menuColor,
    padding: 20
  }),

  control: (_, { selectProps: { width } }) => ({
    width: width
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  }
}

const Card = ({ text }) => {
  const handleClick = () => {
    // eslint-disable-next-line no-undef
    alert('fired')
  }
  const [selectedOption, setSelectedOption] = useState(null)
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
    console.log(`Option selected:`, selectedOption)
  }
  return (
    <div className={styles.card}>
      <div>
        <Button
          type='primary'
          text='AND'
          handleClick={handleClick}
          className='rounded-r-none'
        />
        <Button
          text='OR'
          handleClick={handleClick}
          className='rounded-l-none'
        />
      </div>
      <div className='grid grid-cols-3 gap-4 mt-10 mb-5'>
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          styles={{}}
        />
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          styles={{}}
        />
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          styles={{}}
        />
      </div>
      {/* Figure out a render logic for dynamic list */}

      <Button type='primary' text='+ Add filter' handleClick={handleClick} />
    </div>
  )
}
export default Card
