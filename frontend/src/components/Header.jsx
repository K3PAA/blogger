import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const userLoggedIn = false
  return (
    <header className='primary-header | container'>
      <div className='primary-header__left'>
        <Link to='/' className='primary-header__logo'>
          Blogger
        </Link>

        <button className='btn btn--post' disabled={!userLoggedIn}>
          Create new post+
        </button>
      </div>

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
