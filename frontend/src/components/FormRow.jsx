import React from 'react'

const FormRow = ({ type = 'text', name, fullName = '' }) => {
  const text = fullName ? fullName : name
  const placeholder = fullName ? fullName : `Enter ${name}`
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-row__label visually-hidden'>
        {text}:
      </label>
      <input
        className='form-row__input'
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}

export default FormRow
