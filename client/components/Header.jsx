import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a className='logo' href='/'>
        </a>
      </div>
      <div className='navbar-menu'>
        <Link to='/login' className='button'>Login</Link>
        <Link to='/register' className='button'>Register</Link>
      </div>
    </nav>
  )
}

export default Header