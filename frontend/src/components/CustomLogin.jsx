import React from 'react'

import { FaFacebook, FaGoogle, FaApple } from 'react-icons/fa'

const CustomLogin = () => {
  return (
    <div className='custom-login'>
      <button className='btn btn--custom'>
        <FaFacebook />
      </button>

      <button className='btn btn--custom'>
        <FaGoogle />
      </button>

      <button className='btn btn--custom'>
        <FaApple />
      </button>
    </div>
  )
}

export default CustomLogin
