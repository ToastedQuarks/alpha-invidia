import styles from './index.css'

var React = require('react');
var ReactDOM = require('react-dom');

var Content = React.createClass({
  render: function() {
    return (
      <div class="${styles.mainviwer}">
        "I can React and you can too!"
      </div>
    );
  }
});

ReactDOM.render(<Content />, document.getElementById('planetinfo'));