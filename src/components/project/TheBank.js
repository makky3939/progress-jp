var React = require('react')

var TheBank = React.createClass({
  getInitialState: function() {
    var today = new Date()
    var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

    return {
      time: 0,
      tomorrow: tomorrow.getTime()
    }
  },

  componentWillMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div className='container'>
        <h1>TheBank</h1>
        <hr />
        <section>
          <h1 className='display-1 text-xs-center'>{(this.state.time / 1000) | 0}</h1>
        </section>
      </div>
    )
  },

  tick: function() {
    this.setState({
      time: this.state.tomorrow - new Date().getTime()
    });
  },
});

module.exports = TheBank
