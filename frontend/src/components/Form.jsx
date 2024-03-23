import React from 'react'
import FormRow from './FormRow'

const Form = ({ location }) => {
  return (
    <form className='authorize-form'>
      {location === 'Register' && <FormRow name='name' />}
      <FormRow type='email' name='email' />
      <FormRow type='password' name='password' />
      {location === 'Register' && (
        <FormRow
          type='password'
          name='confirm-password'
          fullName='Confirm Password'
        />
      )}

      <button className='authorize-form__button | btn'>
        {location === 'Register' ? 'Register' : 'Login'}
      </button>
    </form>
  )
}

export default Form
