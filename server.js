var express = require('express');
var fs = require('fs');
var React = require('react');
var Timer = require('./Timer');

var PLACEHOLDER = '$Haha! Something wrong$';
var BUNDLE = fs.readFileSync('./browser-bundle.js', {encoding: 'utf8'});
var TEMPLATE = fs.readFileSync('./index.html', {encoding: 'utf8'});

var app = express();

app.get('/', function (req, res) {
  var markup = React.renderToString(React.createElement(Timer, {}));
  res.send(TEMPLATE.replace(PLACEHOLDER, markup));
});

app.get('/browser-bundle.js', function (req, res) {
  res.end(BUNDLE);
});

app.listen(4000);
console.log("server is running at :4000");
