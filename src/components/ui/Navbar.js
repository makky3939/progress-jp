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
      <ul>
        <li>
          <Link to='/tomato-timer'>tomato timer</Link>
        </li>
        <li>
          <Link to='/the-bank'>the bank</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
      </ul>
    )
  }
});

module.exports = Navbar
