import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='primary-header | container'>
      <Link to='/' className='primary-header__logo'>
        Blogger
      </Link>

      <div className='priamry-header__buttons'>
        <NavLink
          to='/register'
          className={({ isActive, isPending }) =>
            isPending
              ? 'btn btn--auth pending'
              : isActive
              ? 'btn btn--auth active'
              : 'btn btn--auth'
          }
        >
          Register
        </NavLink>
        <NavLink
          to='/login'
          className={({ isActive, isPending }) =>
            isPending
              ? 'btn btn--auth pending'
              : isActive
              ? 'btn btn--auth active'
              : 'btn btn--auth'
          }
        >
          Login
        </NavLink>
      </div>
    </header>
  )
}

export default Header
