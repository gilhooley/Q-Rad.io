/**
 * @jsx React.DOM
 */
$(document).ready(function() {

  var React = require('react');
  var Router = require('react-router');
  var mui = require('material-ui');

  var App = require('./components/main.jsx');
  var Signup = require('./components/signup.jsx');
  var Contribute = require('./components/contribute.jsx');


  var Route = Router.Route;
  var RouteHandler = Router.RouteHandler;
  var TextField = mui.TextField;
  var RaisedButton = mui.RaisedButton;
  var Link = Router.Link;


  var routes = (
    <Route name="root" path="/" handler={App}>
      <Route name="signup" handler={Signup}/>
      <Route name="contribute" handler={Contribute}/>
    </Route>
  );

  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
  });
});
