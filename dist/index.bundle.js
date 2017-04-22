webpackJsonp([1],{

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"resources":"index_resources_2giit","mainviewer":"index_mainviewer_2FbS5","actionpanel":"index_actionpanel_4djNm"};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(82);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(33);
var ReactDOM = __webpack_require__(32);

var Content = React.createClass({
  displayName: 'Content',

  render: function render() {
    return React.createElement(
      'div',
      { 'class': '${styles.mainviwer}' },
      '"I can React and you can too!"'
    );
  }
});

ReactDOM.render(React.createElement(Content, null), document.getElementById('planetinfo'));

/***/ })

},[84]);