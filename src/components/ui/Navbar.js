var React = require('react');
var reactRouter = require('react-router');
var Link = reactRouter.Link;

var Navbar = React.createClass({
  getInitialState: function() {
    return null
  },

  componentWillMount: function() {
  },

  render: function() {
    return (
      <nav className='navbar navbar-light bg-faded'>
        <div className='container'>
          <a className='navbar-brand' href='/'>progress-jp</a>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/tomato-timer'>tomato timer</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/the-bank'>the bank</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>about</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
});

module.exports = Navbar
