import { Link, useLocation } from 'react-router-dom'
import { CustomLogin, Form } from '../components'

const Authenticate = () => {
  const { pathname } = useLocation()
  const location = pathname.charAt(1).toUpperCase() + pathname.substring(2)

  return (
    <main className='authenticate | container'>
      <div className='even-columns'>
        <div className='authenticate__info'>
          <h3 className='authenticate__text'>
            {location} to unlock full{' '}
            <span className='color-primary-700'>Blogger</span> Functionality
          </h3>

          <p className='authenticate__bonus'>
            {location === 'Login'
              ? `Don't have an account yet ? create it here`
              : `Already have account ? Log in here`}
            <Link
              to={location === 'Login' ? '../register' : '../login'}
              className='btn '
            >
              {location === 'Login' ? 'Register' : 'Login'}
            </Link>
          </p>
        </div>
        <div className='authenticate__form'>
          <Form location={location} />

          <p className='authnticate__form-text'>Or sign up with</p>

          <CustomLogin />
        </div>
      </div>
    </main>
  )
}

export default Authenticate
