
setTimeout(function () {
  var React = require('react');
  var Timer = require('./TimerEnhance');

  React.render(<Timer />, document.getElementById('react-root'));
}, 3000);
