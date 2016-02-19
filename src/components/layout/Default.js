var React = require('react')

// Component
// var Navbar = require('../ui/Navbar.js')
// var Footer = require('../ui/Footer.js')

var Layout = React.createClass({
  render: function() {
    return (
      <div>
        <div>
          { this.props.children }
        </div>
      </div>
    )
  }
})

module.exports = Layout
