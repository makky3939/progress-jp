import React from 'react'
import { Link } from 'react-router'

class Navbar extends React.Component {
  render() {
    return (
      <nav className='navbar navbar-light bg-faded'>
        <div className='container'>
          <Link className='navbar-brand' to='/'>progress-jp</Link>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/aaa'>AAA</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
