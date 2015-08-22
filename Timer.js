var React = require('react');

var emptyFunction = function () {};

var Timer = React.createClass({
  getDefaultProps: function () {
    return {
      secondsElapsed: 0,
      click: emptyFunction, 
    };
  }, 

  render: function () {
    var self = this;

    return React.DOM.div(
      {ref: "haha"},
      React.DOM.input({type: 'text', defaultValue: 'Edit me!'}),
        React.DOM.span({onClick: self.props.click}, 'Seconds Elapsed: '), this.props.secondsElapsed
    );}
});

module.exports = Timer;
