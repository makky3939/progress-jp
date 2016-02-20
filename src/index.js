var React = require('react')
var ReactDOM = require('react-dom')
var reactRouter = require('react-router')
var Router = reactRouter.Router
var Route = reactRouter.Route
var Redirect = reactRouter.Redirect

var hashHistory = reactRouter.hashHistory

// Page components
var Layout = require('./components/layout/Default.js')
//
// Project components
var Timer = require('./components/project/Timer.js')
var About = require('./components/project/About.js')
var TheBank = require('./components/project/TheBank.js')

function onUpdateHandler() {
  window.scrollTo(0, 0)
}

onUpdateHandler()

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="" component={Layout}>
      <Route path="/timer" component={Timer} />
      <Route path="/the-bank" component={TheBank} />
      <Route path="/about" component={About} />
    </Route>
    <Redirect from="/" to="/about" />
  </Router>
), document.getElementById('react-root'))
