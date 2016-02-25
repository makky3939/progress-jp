var React = require('react')

var TomatoTimer = React.createClass({
  getInitialState: function() {
    return {
      time: 0
    };
  },

  componentWillMount: function() {
  },

  tick: function() {
    this.setState({time: this.state.time - 1});

    if (this.state.time === 0) {
      var n = new Notification('Time up', {
        body: 'Let’s have a break.',
        icon: 'http://www.makky.io/image/favicon-192x192.png',
      });
      setTimeout(n.close.bind(n), 10000);
      clearInterval(this.interval);
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({time: 60 * 25});
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div className='container'>
        <h1>TomatoTimer</h1>
        <hr />
        <div>{this.state.time}</div>
        <form onSubmit={this.handleSubmit}>
          <button className='btn btn-success-outline'>start</button>
        </form>
      </div>
    )
  }
});

module.exports = TomatoTimer
