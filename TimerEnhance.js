
var React = require('react');

var Timer = require('./Timer');

var TimerEnhance = React.createClass({
  getInitialState: function () {
    return {
      secondsElapsed: 0
    };
  }, 

  tick: function () {
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    });
  }, 

  componentDidMount: function () {
    this.interval = setInterval(this.tick, 1000);
    if (!this.refs) return;

    var timer = this.refs.timer;
    var haha = timer.refs.haha.getDOMNode();
    haha.addEventListener('click', function () {
      console.log('hi haha');
    });
  },

  _onSpanClick: function (e) {
    console.log('span clicked');
  }, 

  componentWillUnmount: function () {
    clearInterval(this.interval);
  }, 

  render: function () {
    return <Timer ref="timer" click={this._onSpanClick} secondsElapsed={this.state.secondsElapsed}/>
  }
});

module.exports = TimerEnhance;
