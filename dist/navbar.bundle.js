webpackJsonp([0],{

/***/ 83:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"navbar":"navbar_navbar_2VH4A","topnav":"navbar_topnav_2kO59","active":"navbar_active_3TRvc","navbar-right":"navbar_navbar-right_20wtw","subnav":"navbar_subnav_2P6-Q"};

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _navbar = __webpack_require__(83);

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(33);
var ReactDOM = __webpack_require__(32);

var NavBar = React.createClass({
  displayName: 'NavBar',

  render: function render() {
    return React.createElement(
      'div',
      { 'class': '${navbar.navbar}' },
      React.createElement(
        'a',
        { href: '#' },
        'Alpha Invidia'
      ),
      React.createElement(
        'a',
        { 'class': '${styles.navbar-right}', href: 'https://github.com/ToastedQuarks/alpha-invidia' },
        'Source'
      )
    );
  }
});

var SubBar = React.createClass({
  displayName: 'SubBar',

  render: function render() {
    return React.createElement(
      'div',
      { 'class': '${navbar.subnav}' },
      React.createElement(
        'a',
        { href: '#' },
        'Main'
      ),
      React.createElement(
        'a',
        { href: '#' },
        'Tech'
      ),
      React.createElement(
        'a',
        { href: '#' },
        'War'
      )
    );
  }
});

ReactDOM.render(React.createElement(NavBar, null), document.getElementById('pagenav'));
ReactDOM.render(React.createElement(SubBar, null), document.getElementById('gamenav'));

/***/ })

},[85]);