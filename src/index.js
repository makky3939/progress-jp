// Packages
import React from 'react'
import {render} from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


const router = (
  <Router history={browserHistory}>

  </Router>
)

// <Route path='/' component={layout_default}>
//   <IndexRoute component={project_top}/>
//   <Route path='analysis' component={project_analysis_index}>
//     <Route path='detailed' component={project_analysis_detailed} />
//     <Route path='comparison' component={project_analysis_comparison} />
//   </Route>
//   <Route path='Simulation' component={project_simulation_index} />
//   <Route path='*' component={project_notfound} />

render(router, document.getElementById('react-root'))
// var React = require('react')
// var ReactDOM = require('react-dom')
// var reactRouter = require('react-router')
// var Router = reactRouter.Router
// var Route = reactRouter.Route
// var Redirect = reactRouter.Redirect
//
// var hashHistory = reactRouter.hashHistory
//
// // Page components
// var Layout = require('./components/layout/Default.js')
// //
// // Project components
// var TomatoTimer = require('./components/project/TomatoTimer.js')
// var About = require('./components/project/About.js')
// var TheBank = require('./components/project/TheBank.js')
//
// function onUpdateHandler() {
//   window.scrollTo(0, 0)
// }
//
// onUpdateHandler()
//
// ReactDOM.render((
//   <Router history={hashHistory}>
//     <Route path="" component={Layout}>
//       <Route path="/tomato-timer" component={TomatoTimer} />
//       <Route path="/the-bank" component={TheBank} />
//       <Route path="/about" component={About} />
//     </Route>
//     <Redirect from="/" to="/tomato-timer" />
//   </Router>
// ), document.getElementById('react-root'))
