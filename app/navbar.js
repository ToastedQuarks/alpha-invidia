import navbar from './navbar.css';

var React = require('react');
var ReactDOM = require('react-dom');

var NavBar = React.createClass({
  render: function() {
    return(
      <div class="${navbar.navbar}">
        <a href="#">Alpha Invidia</a>
        <a class="${styles.navbar-right}" href="https://github.com/ToastedQuarks/alpha-invidia">Source</a>
      </div>
    );
  }
});

var SubBar = React.createClass({
  render: function() {
    return(
      <div class="${navbar.subnav}">
        <a href="#">Main</a>
        <a href="#">Tech</a>
        <a href="#">War</a>
      </div>
    );
  }
});

ReactDOM.render(<NavBar />, document.getElementById('pagenav'));
ReactDOM.render(<SubBar />, document.getElementById('gamenav'));