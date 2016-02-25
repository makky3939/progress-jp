var React = require('react');
var reactRouter = require('react-router');
var Link = reactRouter.Link;

var Footer = React.createClass({
  getInitialState: function() {
    return null
  },

  componentWillMount: function() {
  },

  render: function() {
    return (
      <footer>
        <hr />
        <div className='container'>
          <p>&copy; progress-jp</p>
        </div>
      </footer>
    )
  }
});

module.exports = Footer
